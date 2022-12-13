import axios from "axios";


function getLocalToken() {
    const token = window.localStorage.getItem('token')
    console.log('token >>>', token);
    return token
}

//get token o refreshToken
function getLocalRefreshToken() {
    const token = window.localStorage.getItem('refresh_token')
    return token
}


//cau hinh axios
const instance = axios.create({
    // baseURL: `${process.env.REACT_APP_URL_LOCAL_API}`,
    baseURL: `http://localhost:8080`,
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.setToken = (token) => {
    instance.defaults.headers['x-access-token'] = token
    window.localStorage.setItem('token', token)
}

function getToken() {
    return instance.post('/login', {
        username: 'anonystick.com',
        password: 'anonystick.com',
    })
}

function refreshToken () {
    return instance.post('/token',{
        refreshToken: getLocalRefreshToken()
    })
}


function getDataWithAuto() {
    return instance.get('/users',{
        params: {
            auto: 'yes',
        },
        headers: {
            'x-access-token': getLocalToken() // headers token
        }

    })
}

function getDataWithOutAuto() {
    return instance.get('/users',{
        params: {
            auto: 'no'
        },
        headers: {
            'x-access-token': getLocalToken() // headers token
        }
    })
}

instance.interceptors.request.use(
    function (config) {
      //If local storage has toke, then attach it into request
      const accessToken = getLocalToken();
      config.headers.common.Authorization = `Bearer ${accessToken}`;
  
      //Using the form-data
    //   if (config.data instanceof FormData) {
    //     Object.assign(config.headers, config.data.getHeaders());
    //   }
  
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      if (response.status === 200 || response.status === 201 || response.status === 204) {
      }
      return response.data;
    },
    async (err) => {
      const originalConfig = err.config;
  
      const accessToken = getLocalToken();
      if (accessToken && originalConfig.url !== "api/auth/signin" && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
  
          try {
            const rs = await instance.post("api/auth/refresh-token", {
              refreshToken: getLocalRefreshToken(),
            });
  
            const { success, token } = rs.data;
            if (!success) {
              localStorage.removeItem("token");
              localStorage.removeItem("refreshToken");
            } else localStorage.setItem("token", token);
  
            return instance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
  
      return Promise.reject(err);
    }
  );
  
  export default instance;
export const path = {
    register: '/api/auth/signup',
    login: '/api/auth/signin',
    getLists: `/api/lists/`,
    postList: `/api/lists/`,
    deleteList: (id) => `/api/lists/${id}`,
    getMovies: `/api/movie/`,
    postMovie: `/api/movies/`,
    deleteMovie: (id) => `/api/movies/${id}`
}
import request from "../services/request";
import { path } from "./apiPath";
import validate from "../utils/validate";
import authSlice from "../store/slice/authSlice";

export const registerApi = async (body, dispatch) => {
  const { username, name, password, email } = body;
	dispatch(authSlice.actions.registerStart())
  if (!validate.ValidateNormalLetter(username)) {
		return dispatch(authSlice.actions.registerFailure({message: "Username not valid!"}))
  }
  if (!validate.ValidateMustNotEmpty(username)) {
		return dispatch(authSlice.actions.registerFailure({message: "Username not valid!"}))
  }

  if (!validate.ValidateNormalLetter(name)) {
		return dispatch(authSlice.actions.registerFailure({message: "Username must not be empty!"}))
  }
  if (!validate.ValidateMustNotEmpty(name)) {
		return dispatch(authSlice.actions.registerFailure({message: "Name not valid!"}))
  }

  if (!validate.ValidateMustNotEmpty(password)) {
		return dispatch(authSlice.actions.registerFailure({message: "Name must not be empty!"}))
  }

  if (!validate.ValidateMustNotEmpty(email)) {
		return dispatch(authSlice.actions.registerFailure({message: "Password must not be empty!"}))
  }
  if (!validate.ValidateEmail(email)) {
		return dispatch(authSlice.actions.registerFailure({message: "Email not valid!"}))
  }
  try {
		await request("POST", path.register, { body });
		return dispatch(authSlice.actions.registerSuccess());
  } catch (err) {
		return dispatch(authSlice.actions.registerFailure({message: err.message}))
	}
};

export const loginApi = async (user, dispatch) => {
	const {username, password} = user;
	dispatch(authSlice.actions.loginStart())

	if (!validate.ValidateMustNotEmpty(username)) {
		return dispatch(authSlice.actions.registerFailure({message: "Username must not be empty!"}))
	}
	if (!validate.ValidateMustNotEmpty(password)) {
		return dispatch(authSlice.actions.registerFailure({message: "Password must not be empty!"}))
	}
	try {
		const res = await request("POST", path.login, { body: user });
		console.log("res: ", res)
		dispatch(authSlice.actions.loginSuccess(res))
	}
	catch (err) {
		console.log(err)
		return dispatch(authSlice.actions.registerFailure({message: "Username or password not valid!"}))
	}
  
};

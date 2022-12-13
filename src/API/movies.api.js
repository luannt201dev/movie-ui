import request from "../services/request";
import movieSlice from "../store/slice/movieSlice"
import { path } from "./apiPath";

export const getMoviesAPI = async (dispatch) => {
    dispatch(movieSlice.actions.getMoviesStart());
    try {
      const res = await request("GET", path.getMovies);
      dispatch(movieSlice.actions.getMoviesSuccess(res.data));
    } catch (err) {
      dispatch(movieSlice.actions.getMoviesFailure());
    }
  };
  
  //create
  export const createMovieAPI = async (movie, dispatch) => {
    dispatch(movieSlice.actions.createMovieStart());
    try {
      const res = await request("POST", path.postMovie, {body: movie});
      dispatch(movieSlice.actions.createMovieSuccess(res.data));
    } catch (err) {
      dispatch(movieSlice.actions.createMovieFailure());
    }
  };
  
  //delete
  export const deleteMovieAPI = async (id, dispatch) => {
    dispatch(movieSlice.actions.deleteMovieStart());
    try {
      await request("DELETE", path.deleteMovie(id));
      dispatch(movieSlice.actions.deleteMovieSuccess(id));
    } catch (err) {
      dispatch(movieSlice.actions.deleteMovieFailure());
    }
  };
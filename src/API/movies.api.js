import request from "../services/request";
import movieSlice from "../store/slice/movieSlice"
import { path } from "./apiPath";

export const getMoviesAPI = async (dispatch) => {
    dispatch(movieSlice.actions.getMoviesStart());
    try {
      const res = await request("GET", path.getMovies);
      console.log(res)
      dispatch(movieSlice.actions.getMoviesSuccess(res));
    } catch (err) {
      console.log(err)
      dispatch(movieSlice.actions.getMoviesFailure());
    }
  };
  
  //create
  export const createMovieAPI = async (movie, dispatch) => {
    dispatch(movieSlice.actions.createMovieStart());
    try {
      const res = await request("POST", path.createMovie, {body: movie});
      console.log(res)
      dispatch(movieSlice.actions.createMovieSuccess(res));
    } catch (err) {
      console.log(err)
      dispatch(movieSlice.actions.createMovieFailure());
    }
  };

  //update
  export const updateMovieAPI = async (id, movie, dispatch) => {
    dispatch(movieSlice.actions.updateMovieStart());
    try {
      const res = await request("PUT", path.updateMovie(id), {body: movie});
      dispatch(movieSlice.actions.updateMovieSuccess(res));
    } catch (err) {
      dispatch(movieSlice.actions.updateMovieFailure());
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
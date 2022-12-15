import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    isFetching: false,
    error: null,
    success: null
  };

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getMoviesStart(state) {
            state.movies = []
            state.isFetching = true
            state.error = null
        },
        getMoviesSuccess(state, action) {
            state.movies = action.payload
            state.isFetching = false
            state.error = null
        },
        
        getMoviesFailure(state, action) {
            state.movies= []
            state.isFetching= false
            state.error= action.payload.error_message
        },
        
        createMovieStart(state) {
            state = {...state}
            state.isFetching = true
            state.error = null 
        },
        
        createMovieSuccess(state, action) {
            state.movies = [...state.movies, action.payload]
            state.isFetching = false
            state.error = null
            state.success = "Tạo thành công!"
        },
        
        createMovieFailure(state, action) {
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        updateMovieStart(state) {
            state.isFetching = true
            state.error = null
        },
        
        updateMovieSuccess(state, action) {
            state.movies = state.movies.map(
                (movie) => movie.id === action.payload.id ? action.payload : movie
              )
              state.isFetching = false
              state.error = null
              state.success = "Cập nhật thành công!"
        },
        
        updateMovieFailure(state, action) {
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        deleteMovieStart(state) {
                state.isFetching = true
                state.error = null
        },
        
        deleteMovieSuccess(state, action) {
            state.movies = state.movies.filter((movie) => movie.id !== action.payload)
            state.isFetching = false
            state.error = null
            state.success = "Xoá thành công!"
        },
        
        deleteMovieFailure(state, action) {
            state.isFetching = false
            state.error = action.payload.error_message
        },
        refreshErrorAndSuccess(state) {
            state.error = null
            state.success = null
        }
    }
  })
  
export default movieSlice;
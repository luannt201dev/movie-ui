import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    isFetching: false,
    error: null,
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
        },
        
        createMovieFailure(state, action) {
            state = {...state}
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        updateMovieStart(state) {
            state = {...state}
            state.isFetching = true
            state.error = null
        },
        
        updateMovieSuccess(state, action) {
            state.movies = state.movies.map(
                (movie) => movie._id === action.payload._id ? action.payload : movie
              )
              state.isFetching = false
              state.error = null
        },
        
        updateMovieFailure(state, action) {
            state = {...state}
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        deleteMovieStart(state) {
                state = {...state}
                state.isFetching = true
                state.error = null
        },
        
        deleteMovieSuccess(state, action) {
            state.movies = state.movies.filter((movie) => movie._id !== action.payload)
            state.isFetching = false
            state.error = null
        },
        
        deleteMovieFailure(state, action) {
            state = {...state}
            state.isFetching = false
            state.error = action.payload.error_message
        },
    }
  })
  
export default movieSlice;
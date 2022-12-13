import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    isFetching: false,
    error: null,
  };

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        getMoviesStart(state) {
            state.categories = []
            state.isFetching = true
            state.error = null
        },
        getMoviesSuccess(state, action) {
            state.categories = action.payload
            state.isFetching = false
            state.error = null
        },
        
        getMoviesFailure(state, action) {
            state.categories = []
            state.isFetching= false
            state.error= action.payload.error_message
        },
        
        createMovieStart(state) {
            state = {...state}
            state.isFetching = true
            state.error = null 
        },
        
        createMovieSuccess(state, action) {
            state.categories = [...state.movies, action.payload]
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
            state.categories = state.movies.map(
                (movie) => movie._id === action.payload._id && action.payload
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
            state.categories = state.movies.filter((movie) => movie._id !== action.payload)
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
  
export default categorySlice;
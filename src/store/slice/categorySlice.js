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
        getCategoriesStart(state) {
            state.categories = []
            state.isFetching = true
            state.error = null
        },
        getCategoriesSuccess(state, action) {
            state.categories = action.payload
            state.isFetching = false
            state.error = null
        },
        
        getCategoriesFailure(state, action) {
            state.categories = []
            state.isFetching= false
            state.error= action.payload.error_message
        },
        
        createCategoryStart(state) {
            state = {...state}
            state.isFetching = true
            state.error = null 
        },
        
        createCategorySuccess(state, action) {
            state.categories = [...state.categories, action.payload]
            state.isFetching = false
            state.error = null
        },
        
        createCategoryFailure(state, action) {
            state = {...state}
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        updateCategoryStart(state) {
            state = {...state}
            state.isFetching = true
            state.error = null
        },
        
        updateCategorySuccess(state, action) {
            state.categories = state.categories.map(
                (category) => category.id === action.payload.id ? action.payload : category
              )
              state.isFetching = false
              state.error = null
        },
        
        updateCategoryFailure(state, action) {
            state = {...state}
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        deleteCategoryStart(state) {
                state = {...state}
                state.isFetching = true
                state.error = null
        },
        
        deleteCategorySuccess(state, action) {
            state.categories = state.categories.filter((category) => category._id !== action.payload)
            state.isFetching = false
            state.error = null
        },
        
        deleteCategoryFailure(state, action) {
            state = {...state}
            state.isFetching = false
            state.error = action.payload.error_message
        },
    }
  })
  
export default categorySlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: [],
    isFetching: false,
    error: null,
  };

const listSlice = createSlice({
    name: 'listSlice',
    initialState,
    reducers: {
        getListsStart(state) {
            state.lists = []
            state.isFetching = true
            state.error = null
        },
        getListsSuccess(state, action) {
            state.lists = action.payload
            state.isFetching = false
            state.error = null
        },
        
        getListsFailure(state, action) {
            state.lists= []
            state.isFetching= false
            state.error= action.payload.error_message
        },
        
        createListStart(state) {
            state = {...state}
            state.isFetching = true
            state.error = null 
        },
        
        createListSuccess(state, action) {
            state.lists = [...state.lists, action.payload]
            state.isFetching = false
            state.error = null
        },
        
        createListFailure(state, action) {
            state = {...state}
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        updateListStart(state) {
            state = {...state}
            state.isFetching = true
            state.error = null
        },
        
        updateListSuccess(state, action) {
            state.lists = state.lists.map(
                (movie) => movie._id === action.payload._id && action.payload
              )
              state.isFetching = false
              state.error = null
        },
        
        updateListFailure(state, action) {
            state = {...state}
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        deleteListStart(state) {
                state = {...state}
                state.isFetching = true
                state.error = null
        },
        
        deleteListSuccess(state, action) {
            state.lists = state.lists.filter((movie) => movie._id !== action.payload)
            state.isFetching = false
            state.error = null
        },
        
        deleteListFailure(state, action) {
            state = {...state}
            state.isFetching = false
            state.error = action.payload.error_message
        },
    }
  })
  
export default listSlice;
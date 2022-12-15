import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: [],
    isFetching: false,
    error: null,
    success: null
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
            state.isFetching = true
            state.error = null 
        },
        
        createListSuccess(state, action) {
            state.lists = [...state.lists, action.payload]
            state.isFetching = false
            state.error = null
            state.success = "Tạo series mới thành công!"
        },
        
        createListFailure(state, action) {
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        updateListStart(state) {
            state.isFetching = true
            state.error = null
        },
        
        updateListSuccess(state, action) {
            state.lists = state.lists.map(
                (movie) => movie.id === action.payload.id && action.payload
              )
              state.isFetching = false
              state.error = null
            state.success = "Cập nhật series thành công!"
        },
        
        updateListFailure(state, action) {
            state.isFetching = false
            state.error = action.payload.error_message
        },
        
        deleteListStart(state) {
                state.isFetching = true
                state.error = null
        },
        
        deleteListSuccess(state, action) {
            state.lists = state.lists.filter((movie) => movie.id !== action.payload)
            state.isFetching = false
            state.success = "Xoá series thành công!"
            state.error = null
        },
        
        deleteListFailure(state, action) {
            state.isFetching = false
            state.error = action.payload.error_message
        },
        refreshErrorAndSuccess(state) {
            state.error = null
            state.success = null
        }
    }
  })
  
export default listSlice;
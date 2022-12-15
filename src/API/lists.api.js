import request from "../services/request";
import listSlice from "../store/slice/listSlice";
import { path } from "./apiPath";

export const getListsAPI = async (dispatch) => {
    dispatch(listSlice.actions.getListsStart());
    try {
      const res = await request("GET", path.getLists);
      // console.log("get lists", res)
      dispatch(listSlice.actions.getListsSuccess(res));
    } catch (err) {
      dispatch(listSlice.actions.getListsFailure({error_message: err}));
    }
  };
  
  //create
  export const createListAPI = async (list, dispatch) => {
    dispatch(listSlice.actions.createListStart());
    try {
      const res = await request("POST", path.createList, {body: list});
      console.log("create lists",res)
      dispatch(listSlice.actions.createListSuccess(res));
    } catch (err) {
      dispatch(listSlice.actions.createListFailure({error_message: err.message}));
    }
  };

   //update
   export const updateListAPI = async (id, list, dispatch) => {
    dispatch(listSlice.actions.updateListStart());
    try {
      const res = await request("PUT", path.updateList(id), {body: list});
      console.log("update lists",res)
      dispatch(listSlice.actions.updateListSuccess(res));
    } catch (err) {
      dispatch(listSlice.actions.updateListFailure({error_message: err.message}));
    }
  };
  
  //delete
  export const deleteListAPI = async (id, dispatch) => {
    dispatch(listSlice.actions.deleteListStart());
    try {
      const res = await request("DELETE" , path.deleteList(id));
      console.log(res)
      dispatch(listSlice.actions.deleteListSuccess(id));
    } catch (err) {
      console.log(err)
      dispatch(listSlice.actions.deleteListFailure({error_message: err.message}));
    }
  };
import request from "../services/request";
import listSlice from "../store/slice/listSlice";
import { path } from "./apiPath";

export const getListsAPI = async (dispatch) => {
    dispatch(listSlice.actions.getListsStart());
    try {
      const res = await request("GET", path.getLists);
      dispatch(listSlice.actions.getListsSuccess(res.data));
    } catch (err) {
        console.log(err)
      dispatch(listSlice.actions.getListsFailure({error_message: err}));
    }
  };
  
  //create
  export const createListAPI = async (list, dispatch) => {
    dispatch(listSlice.actions.createListStart());
    try {
      const res = await request("POST", path.postList, {body: list});
      dispatch(listSlice.actions.createListSuccess(res.data));
    } catch (err) {
      dispatch(listSlice.actions.createListFailure());
    }
  };
  
  //delete
  export const deleteListAPI = async (id, dispatch) => {
    dispatch(listSlice.actions.deleteListStart());
    try {
      await request("DELETE" , path.deleteList(id));
      dispatch(listSlice.actions.deleteListSuccess(id));
    } catch (err) {
      dispatch(listSlice.actions.deleteListFailure());
    }
  };
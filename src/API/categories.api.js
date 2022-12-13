import request from "../services/request";
import categorySlice from "../store/slice/categorySlice";
import { path } from "./apiPath";

export const getCategoriesAPI = async (dispatch) => {
    dispatch(categorySlice.actions.getCategoriesStart());
    try {
      const res = await request("GET", path.getCategorys);
      dispatch(categorySlice.actions.getCategoriesSuccess(res.data));
    } catch (err) {
        console.log(err)
      dispatch(categorySlice.actions.getCategoriesFailure({error_message: err}));
    }
  };
  
  //create
  export const createCategoryAPI = async (category, dispatch) => {
    dispatch(categorySlice.actions.createCategoryStart());
    try {
      const res = await request("POST", path.createCategory, {body: category});
      dispatch(categorySlice.actions.createCategorySuccess(res.data));
    } catch (err) {
      dispatch(categorySlice.actions.createCategoryFailure());
    }
  };
  
  //delete
  export const deleteCategoryAPI = async (id, dispatch) => {
    dispatch(categorySlice.actions.deleteCategoryStart());
    try {
      await request("DELETE" , path.deleteCategory(id));
      dispatch(categorySlice.actions.deleteCategorySuccess(id));
    } catch (err) {
      dispatch(categorySlice.actions.deleteCategoryFailure());
    }
  };
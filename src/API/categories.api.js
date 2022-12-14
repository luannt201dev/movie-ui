import request from "../services/request";
import categorySlice from "../store/slice/categorySlice";
import { path } from "./apiPath";

export const getCategoriesAPI = async (dispatch) => {
    dispatch(categorySlice.actions.getCategoriesStart());
    try {
      const res = await request("GET", path.getCategories);
      dispatch(categorySlice.actions.getCategoriesSuccess(res));
    } catch (err) {
      console.log(err)
      dispatch(categorySlice.actions.getCategoriesFailure({error_message: err.message}));
    }
  };
  
  //create
  export const createCategoryAPI = async (category, dispatch) => {
    dispatch(categorySlice.actions.createCategoryStart());
    if (!category.name) {
      return dispatch(categorySlice.actions.createCategoryFailure({error_message: "Tên danh mục không hợp lệ!"}));
    }
    try {
      const res = await request("POST", path.createCategory, {body: category.name});
      dispatch(categorySlice.actions.createCategorySuccess(res));
    } catch (err) {
      console.log(err)
      dispatch(categorySlice.actions.createCategoryFailure({error_message: err.message}));
    }
  };

  export const updateCategoryAPI = async (id, category, dispatch) => {
    dispatch(categorySlice.actions.updateCategoryStart());
    if (category.name === "") {
      return dispatch(categorySlice.actions.updateCategoryFailure({error_message: "Tên danh mục không hợp lệ!"}));
    }
    try {
      const res = await request("PUT", path.updateCategory(id), {body: category.name});
      dispatch(categorySlice.actions.updateCategorySuccess(res.data));
    } catch (err) {
      console.log(err)
      dispatch(categorySlice.actions.updateCategoryFailure({error_message: err.message}));
    }
  };
  
  //delete
  export const deleteCategoryAPI = async (id, dispatch) => {
    dispatch(categorySlice.actions.deleteCategoryStart());
    try {
      await request("DELETE" , path.deleteCategory(id));
      dispatch(categorySlice.actions.deleteCategorySuccess(id));
    } catch (err) {
      console.log(err)
      dispatch(categorySlice.actions.deleteCategoryFailure({error_message: err.message}));
    }
  };
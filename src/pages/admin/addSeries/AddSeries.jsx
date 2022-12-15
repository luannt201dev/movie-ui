import { useEffect, useState } from "react";
import "./addSeries.css";
import { createListAPI } from "../../../API/lists.api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import listSlice from "../../../store/slice/listSlice";

export default function AddList() {
  const [list, setList] = useState(null);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const {error, success} = useSelector(state => state.list)
  const categories = useSelector(state => state.category.categories)

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
    if (success) {
      toast.success(success)
    }
    dispatch(listSlice.actions.refreshErrorAndSuccess())
  },[error, success])

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleAutoCompleteChange = (e, value) => {
		setList({...list, categories: value.map(el=>el.id)})
	}

  // const handleSelect = (e) => {
  //   let value = Array.from(e.target.selectedOptions, (option) => option.value);
  //   setList({ ...list, [e.target.name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(list)
    createListAPI(list, dispatch);
    // navigate("/admin/series")
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Series</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Categories</label>
            <Autocomplete
            multiple
            id="tags-standard"
            options={categories}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="Chọn danh mục"
              />
            )}
						onChange={handleAutoCompleteChange}
          />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
          <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
        </div>
        {/* <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div> */}
        
      </form>
    </div>
  );
}
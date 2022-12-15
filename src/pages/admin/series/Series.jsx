import { Link, useLocation } from "react-router-dom";
import "./series.css";
// import { Publish } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { updateListAPI } from "../../../API/lists.api";
import { toast } from "react-toastify";
import listSlice from "../../../store/slice/listSlice";

export default function List() {
  const location = useLocation();
  const {lists, success, error} = useSelector((state) => state.list);
  const categories = useSelector((state) => state.category.categories);
  const id = location.pathname.split("/")[3];
  const [list, setList] = useState(
    lists.find((list) => list.id === Number(id))
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success)
    }
    dispatch(listSlice.actions.refreshErrorAndSuccess())
  }, [error, success]);
  const [updateList, setUpdateList] = useState({ title:list.title, type:list.type, categories: list.categories.map(el=>el.id) })

  const dispatch = useDispatch()
  const handleChange = (e) => {
    const value = e.target.value;
    setUpdateList({ ...updateList, [e.target.name]: value });
  };

  const handleAutoCompleteChange = (e, value) => {
    setUpdateList({ ...updateList, categories: value.map(el=>el.id) });
  };

  const handleUpdateSeries = (e) => {
    e.preventDefault();
    updateListAPI(list.id, updateList, dispatch)
  };

  return (
    <div className="product">
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productInfoKey">Title:</span>
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem" style={{ width: "600px" }}>
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list.id}</span>
            </div>
            <div className="productInfoItem" style={{ width: "600px" }}>
              <span className="productInfoKey">Categories:</span>
              <span className="productInfoValue">
                {list.categories?.map((el, index) => el.name).toString()}
              </span>
            </div>
            <div className="productInfoItem" style={{ width: "600px" }}>
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text"  onChange={handleChange} name="title" placeholder={updateList.title} />
            <label>Type</label>
            <input type="text" onChange={handleChange} name="type" placeholder={updateList.type} />
            <label>Categories</label>
            <Autocomplete
              multiple
              id="tags-standard"
              options={categories}
              getOptionLabel={(option) => option.name}
              defaultValue={list.categories}
              isOptionEqualToValue={(option, value) => option.id === value.id}
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
          <div className="productFormRight">
            <button className="productButton" onClick={handleUpdateSeries}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

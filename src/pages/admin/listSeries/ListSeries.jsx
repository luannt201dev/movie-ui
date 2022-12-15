import "./listSeries.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteListAPI } from "../../../API/lists.api";
import { toast } from "react-toastify";
import listSlice from "../../../store/slice/listSlice";

export default function ListList() {
  const {lists, error, success} = useSelector((state) => state.list);
  // const categories = useSelector((state) => state.category.categories);
  const [data, setData] = useState([])
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    deleteListAPI(id, dispatch);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success)
    }
    dispatch(listSlice.actions.refreshErrorAndSuccess())
  }, [error, success]);

  useEffect(() => {
    setData(lists.map(list => {
      let value = "";
      list.categories.forEach((el, index) => {
        value += (index+1) !== list.categories.length ? el.name +", " : el.name
      })
      return {
        ...list,
        categories: value
      }
    }))
  }, [lists])

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "title", headerName: "Title", width: 250 },
    {
      field: "categories",
      headerName: "Categories",
      width: 350,
    },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/admin/series/" + params.row.id}}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="product-list">
      <Link to="/admin/new-series">
        <button className="product-add--button">Create</button>
      </Link>
      <DataGrid
        className="product-list__table"
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r.id}
      />
    </div>
  );
}

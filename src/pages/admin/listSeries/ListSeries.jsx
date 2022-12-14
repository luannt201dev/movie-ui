import "./listSeries.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListsAPI, deleteListAPI} from "../../../API/lists.api";

export default function ListList() {
  const lists = useSelector(state => state.list.lists);
	const dispatch = useDispatch();
  useEffect(() => {
    getListsAPI(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteListAPI(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/lists/" + params.row._id, id: params.row._id }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
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
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
import { DataGrid } from "@mui/x-data-grid";
import "./movieList.css";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import {  useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import movieSlice from "../../../store/slice/movieSlice";
import { useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { activeMovieAPI, deleteMovieAPI } from "../../../API/movies.api";

const MovieList = () => {
  const { movies, isFetching, error, success} = useSelector(state => state.movie);
  
  const dispatch = useDispatch()

  console.log(movies)

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
    if (success) {
      toast.success(success)
    }
    dispatch(movieSlice.actions.refreshErrorAndSuccess())
  },[error, success])

  const handleDelete = (id) => {
    deleteMovieAPI(id, dispatch)
  };

  const handelActiveMovie = (id, status)=> {
    activeMovieAPI(id, status, dispatch)
  }

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "movie",
      headerName: "Movie",
      width: 280,
      renderCell: (params) => {
        return (
          <div className="product-list__product">
            <img src={params.row.imgSm} alt="" className="product-list__img" />
            {params.row.title}
          </div>
        );
      },
    },
    // {
    //   field: "genre",
    //   headerName: "Genre",
    //   width: 120,
    // },
    {
      field: "year",
      headerName: "Year",
      width: 120,
    },
    {
      field: "limitAge",
      headerName: "Limit",
      width: 120,
    },
    {
      field: "active",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="product-list__product">
            {params.row.active ? "active" : "disable"}
          </div>
        );
      },
    },
    {
      field: "series",
      headerName: "Series",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="product-list__product">
            {params.row.series.title}
          </div>
        );
      },
    },
    {
      field: "categories",
      headerName: "Categories",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="product-list__product">
            {params.row.categories.map(el => el.name).toString()}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="product-list__action">
            <Link
              to={{ pathname: "/admin/movies/" + params.row.id}}
            >
              <button className="product-list__button--edit">Edit</button>
            </Link>
            <button className="product-list__button--edit" onClick={() => handelActiveMovie(params.row.id, params.row.active)}>{params.row.active ? "Enable" : "Active"}</button>
            <LoadingButton
            size="small"
            onClick={() => handleDelete(params.row.id)}
            loading={isFetching}
            loadingPosition="end"
            variant="contained"
            className="add-product-button"
          >
            Delete
          </LoadingButton>
          </div>
        );
      },
    },
  ];

  return (
    <div className="product-list">
      <Link to="/admin/new-movie">
        <button className="product-add--button">Create</button>
      </Link>
      <DataGrid
        className="product-list__table"
        rows={movies}
        columns={columns}
        pageSize={movies.length}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r.id}
      />
    </div>
  );
};

export default MovieList;
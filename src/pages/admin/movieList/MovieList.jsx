// import { DataGrid } from "@mui/x-data-grid";
// import "./movieList.css";
// import { Link } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { DeleteOutline } from "@mui/icons-material";

// const MovieList = () => {
//   const { movies, dispatch } = useContext(MovieContext);

//   useEffect(() => {
//     getMovies(dispatch);
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     deleteMovie(id, dispatch);
//   };

//   const columns = [
//     { field: "_id", headerName: "ID", width: 200 },
//     {
//       field: "movie",
//       headerName: "Movie",
//       width: 280,
//       renderCell: (params) => {
//         return (
//           <div className="product-list__product">
//             <img src={params.row.img} alt="" className="product-list__img" />
//             {params.row.title}
//           </div>
//         );
//       },
//     },
//     {
//       field: "genre",
//       headerName: "Genre",
//       width: 120,
//     },
//     {
//       field: "year",
//       headerName: "Year",
//       width: 120,
//     },
//     {
//       field: "limit",
//       headerName: "Limit",
//       width: 120,
//     },
//     {
//       field: "isSeries",
//       headerName: "IsSeries",
//       width: 120,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 140,
//       renderCell: (params) => {
//         return (
//           <div className="product-list__action">
//             <Link
//               to={{ pathname: "/movies/" + params.row._id, movie: params.row }}
//             >
//               <button className="product-list__button--edit">Edit</button>
//             </Link>
//             <DeleteOutline
//               onClick={() => handleDelete(params.row._id)}
//               className="product-list__button--remove"
//             />
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="product-list">
//       <Link to="/new-movie">
//         <button className="product-add--button">Create</button>
//       </Link>
//       <DataGrid
//         className="product-list__table"
//         rows={movies}
//         columns={columns}
//         pageSize={movies.length}
//         checkboxSelection
//         disableSelectionOnClick
//         getRowId={(r) => r._id}
//       />
//     </div>
//   );
// };

// export default MovieList;
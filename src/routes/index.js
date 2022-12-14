/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";

// import AddUser from "../pages/admin/addUser/AddUser";
import UserList from "../pages/admin/userList/UserList";
// import User from "../pages/admin/user/User";

// import Movie from "../pages/admin/movie/Movie";
import MovieList from "../pages/admin/movieList/MovieList";
import AddMovie from "../pages/admin/addMovie/AddMovie";

// import Movie from "../pages/admin/movie/Movie";
import ListSeries from "../pages/admin/listSeries/ListSeries";
import AddSeries from "../pages/admin/addSeries/AddSeries";


import Login from "../pages/login/Login";
import {CheckLogin, ProtectedUserRoute, ProtectedAdminRoute} from "./protected"
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import HomeAdmin from "../pages/admin/home/HomeAdmin";
// import Watch from "../pages/watch/Watch";
import Register from "../pages/register/Register";
import Admin from "../pages/admin/Admin";
import Categories from "../pages/admin/categories/Categories";
import Detail from "../pages/detail/Detail";
import Watch from "../pages/watch/Watch";

const router = createBrowserRouter([
  {
    path: "login",
    element: (
      <CheckLogin>
        <Login />
      </CheckLogin>
    ),
  },
  {
    path: "register",
    element: (
      <CheckLogin>
        <Register />
      </CheckLogin>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdminRoute>
        <Admin />
      </ProtectedAdminRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomeAdmin />,
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "users",
        element: <UserList />
      },
      // {
      //   path: "add-user",
      //   element: <AddUser />,
      // },
      // {
      //   path: "user/:userId",
      //   element: <User />
      // },
      {
        path: "movies",
        element: <MovieList />
      },
      // {
      //   path: "movie/:id",
      //   element: <Movie />,
      // },
      {
        path: "new-movie",
        element: <AddMovie />
      },
      {
        path: "series",
        element: <ListSeries />
      },
      // {
      //   path: "series/:id",
      //   element: <Series />,
      // },
      {
        path: "new-series",
        element: <AddSeries />
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedUserRoute>
        <Home />
      </ProtectedUserRoute>
    ),
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/watch/*",
    //     element: <Watch />,
    //   },
    // ],
  },
  {
    path: "/watch/*",
    element: (
      // <ProtectedUserRoute>
        <Watch />
      // </ProtectedUserRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/detail/*",
    element: (
      // <ProtectedUserRoute>
        <Detail />
      // </ProtectedUserRoute>
    ),
    errorElement: <ErrorPage />,
  }
]);

export default router;

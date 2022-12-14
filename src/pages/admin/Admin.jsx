import React from 'react'
import TopBar from "../../components/topBar/TopBar"
import SideBar from "../../components/sideBar/SideBar"
import "./admin.css"
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMoviesAPI } from '../../API/movies.api'
import { getCategoriesAPI } from '../../API/categories.api'

const Admin = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getMoviesAPI(dispatch);
    getCategoriesAPI(dispatch)
  }, []);
  return (
    <>
      <TopBar />
      <div className="container" >
        <SideBar />
        <Outlet />
        </div>
    </>
  )
}

export default Admin

import React from 'react'
import TopBar from "../../components/topBar/TopBar"
import SideBar from "../../components/sideBar/SideBar"
import "./admin.css"
import { Outlet } from 'react-router-dom'

const Admin = () => {
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

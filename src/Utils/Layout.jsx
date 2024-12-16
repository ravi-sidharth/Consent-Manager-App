import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Body from "../Components/Body/Body";

function Layout() {
  return (
    <div className="flex">
      <Header />
      <Main />
      <Outlet/>
    </div>
  )
}

export default Layout;

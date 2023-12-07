import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";

const HomeLayout = () => {
  return (
    <div className="admin-dashboard">
      <NavBar />
      <div
        className="main-dashboard"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;

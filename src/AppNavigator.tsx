import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const AppNavigator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex sm:flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AppNavigator;

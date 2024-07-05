import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowSidebar } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleShowSidebar = () => {
    dispatch(toggleShowSidebar({}));
  };
  return (
    <div className="grid grid-flow-col px-4 shadow-lg items-center">
      <div className="col-span-10 lg:col-span-1 flex items-center justify-start">
        <button onClick={handleShowSidebar}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
            alt="hamburger"
            className="h-6 cursor-pointer mr-2"
          />
        </button>
        <Link to="/">
          <img
            src={
              "https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
            }
            alt="logo"
            className="h-14 cursor-pointer"
          />
        </Link>
      </div>
      <div className="col-span-10 hidden lg:block sm:flex items-center justify-center">
        <div className="w-3/5 mx-auto flex items-center">
          <input
            type="text"
            className="border border-gray-400 flex-grow px-4 py-1 rounded-l-full"
          />
          <button className="border border-gray-400 py-1   px-4 rounded-r-full">
            Search
          </button>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center">Sign-in</div>
    </div>
  );
};

export default Navbar;

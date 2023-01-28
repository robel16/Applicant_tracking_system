import "./navigation.style.scss";
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  const width = window.innerWidth;
  const switchLinks = (pathname) => {
    switch (pathname) {
      case "/":
        return (
          <ul>
            <Link to="application">
              {" "}
              <li
                className="inline-flex absolute text-sm hover:cursor-pointer after:absolute bg-hover-background left-0 
              bottom-0 width-3/4 transform scale-x-0 height-0.5 transition transform ease-in duration-300
              hover:after:transform scale-x-1 cursor-pointer"
              >
                Application
              </li>
            </Link>
          </ul>
        );
      case "/application":
        return (
          <ul className="list-nones">
            <Link to="">
              <li
                className="inline-flex absolute text-sm hover:cursor-pointer after:absolute bg-hover-background left-0 
              bottom-0 width-3/4 transform scale-x-0 height-0.5 transition  ease-in duration-300
              hover:after:transform scale-x-1 cursor-pointer"
              >
                Job
              </li>
            </Link>
          </ul>
        );
      default:
        return (
          <ul>
            <Link to="application">
              {" "}
              <li
                className="inline-flex absolute text-sm hover:cursor-pointer after:absolute bg-hover-background left-0 
              bottom-0 width-3/4 transform scale-x-0 height-0.5 transition  ease-in duration-300
              hover:after:transform scale-x-1 cursor-pointer"
              >
                Application
              </li>
            </Link>
            <br></br>
            <Link to="">
              <li
                className="inline-flex absolute text-sm hover:cursor-pointer after:absolute bg-hover-background left-0 
              bottom-0 width-3/4 transform scale-x-0 height-0.5 transition  ease-in duration-300
              hover:after:transform scale-x-1 cursor-pointer"
              >
                Job
              </li>
            </Link>
          </ul>
        );
    }
  };
  return (
    // nav
    <div className=" flex  flex-row  w-100 scrollbar-hide   ">
      {/* nav container */}
      <div className="bg-cust-primary h-screen w-1/6   flex flex-col ">
        {/* nav-header */}
        <div className="flex  justify-center  py-6 border-b  border-b-gray-700  p-3  ">
          {/* mmcy-nav */}
          <span className="text-white font-semibold xl:text-3xl md:text-2xl ">
            MMCY|
          </span>
          {/* tech-nav */}
          <span className="text-cust-secondary font-semibold xl:text-3xl md:text-2xl  ">
            Tech{" "}
          </span>
        </div>

        {/* nav-link-container */}
        <div className="h-auto flex-1 flex flex-col justify-between pt-3">
          <div>
            <ul>
              <Link
                to="application"
                // className={(isActive) => console.log(isActive.isActive)}
              >
                <li
                  className={`p-3 lg:text-xl text-white  transition-all ease-in-out md:w-1/10 md:text-sm  ${
                    pathname === "/application"
                      ? "bg-cust-secondary hover:bg-cust-secondary"
                      : "hover:bg-cust-secondary-darken"
                  }`}
                >
                  Application
                </li>
              </Link>
              <Link to="">
                <li
                  className={`p-3 lg:text-xl md:text-sm text-white  transition-all ease-in-out ${
                    pathname === "/"
                      ? "bg-cust-secondary hover:bg-cust-secondary"
                      : "hover:bg-cust-secondary-darken"
                  }`}
                >
                  Job
                </li>
              </Link>
            </ul>
          </div>
          <div className="bg-cust-primary  p-5 text-white text-xl mb-4 ml-6 hover:text-cust-secondary  ">
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
      <div className="flex overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
export default Navigation;

import { Link, NavLink, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { pathname } = useLocation();
  console.log("photo url", user?.photoURL);
  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <li className={`${user ? "pt-10" : "pt-5"} `}>
        <Link className={`${pathname === "/" ? "active-link" : ""}`} to="/">
          Home
        </Link>
      </li>

      <li className={`${user ? "pt-10" : "pt-5"} `}>
        <Link
          className={`${pathname === "/alljobs" ? "active-link" : ""}`}
          style={{ style: "" }}
          to="/alljobs"
        >
          All Jobs
        </Link>
      </li>

      <li className={`${user ? "pt-10" : "pt-5"} `}>
        <Link
          className={`${pathname === "/blogs" ? "active-link" : ""}`}
          to="/blogs"
        >
          Blogs
        </Link>
      </li>
      {user?.displayName && (
        <li className={`${user ? "pt-10" : "pt-5"} `}>
          <Link
            className={`${pathname === "/myjobs" ? "active-link" : ""}`}
            to="/myjobs"
          >
            My jobs
          </Link>
        </li>
      )}
        {user?.displayName && (
        <li className={`${user ? "pt-10" : "pt-5"} `}>
          <Link
            className={`${pathname === "/addajob" ? "active-link" : ""}`}
            to="/addajob"
          >
            Add a job
          </Link>
        </li>
      )}
        {user?.displayName && (
        <li className={`${user ? "pt-10" : "pt-5"} `}>
          <Link
            className={`${pathname === "/appliedjobs" ? "active-link" : ""}`}
            to="/appliedjobs"
          >
            Applied jobs
          </Link>
        </li>
      )}

      {/* <li className={`${user ? "pt-10" : "pt-5"} `}>
        {user?.displayName ? (
          <p onClick={handleLogout} className="border-0">
            Logout
          </p>
        ) : (
          <Link
            className={`${pathname === "/login" ? "active-link" : ""}`}
            to="/login"
          >
            <p className="border-0">Log in</p>
          </Link>
        )}
      </li> */}
    </>
  );

  const endlinks = (
    <>
      <li>
        {user ? (
          <div className="  lg:ms-0  flex items-center flex-col mt-6 gap-2  ">
            <div className="rounded-full  tooltip flex gap-5"   >
              <div className="w-12 rounded-full  tooltip"  data-tip={user?.displayName}   >
                <img className="rounded-full" src={user?.photoURL} />
              </div>
              <btn  onClick={handleLogout} className="border-0 btn btn-error btn-outline">
            Logout
          </btn>
            </div>
            {/* <p className="font-bold  ">{user.displayName}</p> */}
          </div>
        ) :  <Link
        className={`${pathname === "/login" ? "active-link" : ""}`}
        to="/login"
      >
        <p className="border-0">Log in</p>
      </Link> }
      </li>
    </>
  );
  return (
    <div className="   ">
      <div className="navbar  lg:max-w-6xl mx-auto   ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  z-40 menu-sm dropdown-content mt-3  p-2 shadow bg-base-200 rounded-box w-52"
            >
              {navLinks}
              {endlinks}
            </ul>
          </div>
          <a className="mt-10     ">
            <div className="w-52  pb-5">
              <img
                className="w-full "
                src={` ${"https://i.ibb.co/RHwMJBk/electrologo-removebg-preview.png"}`}
              />
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">{navLinks}</ul> */}
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{endlinks}</ul>
          {/* {user?.displayName ? (
            <button
              onClick={handleLogout}
              className="btn btn-primary bg-red-400 border-0 text-white"
            >
              {" "}
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn border-0  bg-red-400 text-white">
                {" "}
                Log in
              </button>{" "}
            </Link>
          )} */}
          {/* {theme === "light" && (
            <button
              onClick={() => {setTheme("dark");
              console.log("this is theme ",theme)
            
            }}
              className="btn btn-primary ms-5  border-0 text-white"
            >
              {" "}
              Dark
            </button>
          )}

          {theme === "dark" && (
            <button
              onClick={() => {setTheme("light")
            
            
            console.log("this is theme ",theme)}}
              className="btn btn-primary ms-5 border-0 text-white"
            >
              {" "}
              Light
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;

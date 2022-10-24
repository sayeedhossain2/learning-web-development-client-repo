import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link className="text-2xl mr-3 font-semibold " to="/home">
                Home
              </Link>

              <Link className="text-2xl mr-3 font-semibold " to="/courses">
                Courses
              </Link>
              <Link className="text-2xl mr-3 font-semibold " to="/faq">
                FAQ
              </Link>
              <Link className="text-2xl mr-3 font-semibold " to="/blog">
                Blog
              </Link>
              <Link className="text-2xl mr-3 font-semibold " to="/">
                dark/ light
              </Link>
              <Link className="text-2xl mr-3 font-semibold " to="/login">
                Login
              </Link>
              <Link className="text-2xl mr-3 font-semibold " to="/register">
                Register
              </Link>
            </div>
          </div>{" "}
          <a className="btn btn-ghost normal-case text-xl">
            <img
              className="w-10 rounded-full mr-2"
              src="development.jpg"
              alt=""
            />
            Web Development
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal p-0">
            <Link className="text-2xl mr-3 font-semibold " to="/home">
              Home
            </Link>

            <Link className="text-2xl mr-3 font-semibold " to="/courses">
              Courses
            </Link>
            <Link className="text-2xl mr-3 font-semibold " to="/faq">
              FAQ
            </Link>
            <Link className="text-2xl mr-3 font-semibold " to="/blog">
              Blog
            </Link>
            <Link className="text-2xl mr-3 font-semibold " to="/">
              dark/ light
            </Link>
            <Link className="text-2xl mr-3 font-semibold " to="/login">
              Login
            </Link>
            <Link className="text-2xl mr-3 font-semibold " to="/register">
              Register
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

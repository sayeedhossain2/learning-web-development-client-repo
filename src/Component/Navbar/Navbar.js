import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaUser, FaToggleOn, FaToggleOff } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [toggol, setToggle] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const togol = () => {
    setToggle(!toggol);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.errer(error);
      });
  };

  return (
    <div className="mb-5">
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
              <NavLink className="text-2xl mr-3 font-semibold " to="/home">
                Home
              </NavLink>

              <NavLink className="text-2xl mr-3 font-semibold " to="/courses">
                Courses
              </NavLink>
              <NavLink className="text-2xl mr-3 font-semibold " to="/faq">
                FAQ
              </NavLink>
              <NavLink className="text-2xl mr-3 font-semibold " to="/blog">
                Blog
              </NavLink>

              <NavLink className="text-2xl mr-3 font-semibold " to="/register">
                Register
              </NavLink>
              {/* <Link
                className="text-yellow-400 text-2xl mr-3 font-semibold "
                to="/register"
              >
                {user?.displayName}
              </Link> */}
              {/* shall display */}
              {user?.uid ? (
                <NavLink className="mr-3 btn btn-ghost normal-case text-yellow-400 text-xl">
                  <NavLink
                    onClick={handleLogOut}
                    className="text-2xl mr-3 font-semibold "
                  >
                    Logout
                  </NavLink>
                  {user?.photoURL ? (
                    <>
                      <img
                        className="rounded-full"
                        src={user.photoURL}
                        title={user.displayName}
                        style={{ width: "40px" }}
                      />
                    </>
                  ) : (
                    <FaUser />
                  )}
                </NavLink>
              ) : (
                <NavLink className="text-2xl mr-3 font-semibold " to="/login">
                  Login
                </NavLink>
              )}
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
          <div className="menu menu-horizontal ">
            {/* 
className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }

*/}

            <NavLink className="text-2xl mr-4 font-semibold  " to="/home">
              Homes
            </NavLink>

            <NavLink className="text-2xl mr-4 font-semibold " to="/courses">
              Courses
            </NavLink>
            <NavLink className="text-2xl mr-4 font-semibold " to="/faq">
              FAQ
            </NavLink>
            <NavLink className="text-2xl mr-4 font-semibold " to="/blog">
              Blog
            </NavLink>

            {/* <div onClick={togol}>
              {toggol ? (
                <NavLink className="text-2xl mr-4 font-semibold ">dark</NavLink>
              ) : (
                <NavLink className="text-2xl mr-4 font-semibold ">
                  light
                </NavLink>
              )}
            </div> */}

            <NavLink className="text-2xl mr-3  font-semibold " to="/register">
              Register
            </NavLink>
            {/* <Link
              className="text-yellow-400 text-2xl mr-3 font-semibold "
              to="/register"
            >
              {user?.displayName}
            </Link> */}
            {user?.uid ? (
              <div className="mr-4 btn btn-ghost normal-case  text-xl">
                <button
                  onClick={handleLogOut}
                  className="text-2xl mr-4 mb-3 font-semibold "
                >
                  Logout
                </button>
                {user?.photoURL ? (
                  <>
                    <img
                      className="rounded-full"
                      src={user.photoURL}
                      title={user.displayName}
                      style={{ width: "40px" }}
                    />{" "}
                  </>
                ) : (
                  <FaUser />
                )}
              </div>
            ) : (
              <NavLink className="text-2xl mr-4 font-semibold " to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
        <div className="navbar-end">
          <div onClick={togol}>
            {toggol ? (
              <NavLink className="text-2xl mr-3 font-semibold ">
                <FaToggleOn />{" "}
              </NavLink>
            ) : (
              <NavLink className="text-2xl mr-3 font-semibold ">
                <FaToggleOff />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

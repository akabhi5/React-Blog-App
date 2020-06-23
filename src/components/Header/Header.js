import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <nav className="navbar shadow navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" href="#">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </NavLink>
          </li>
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  {user.name}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/newblog">
                  <button className="btn btn-primary btn-sm">+New Blog</button>
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control form-control-sm mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 btn-sm"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;

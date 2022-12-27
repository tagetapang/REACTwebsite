
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand text-white mx-2" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-Link active text-white mx-2"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link text-white mx-2" to="/About-Villages">
                About-Villages
              </Link>
            </li>
            <li className="nav-item dropdown ">
              <Link
                className="nav-Link dropdown-toggle text-white mx-2"
                to="#/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.list}
              </Link>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <Link className="dropdown-item text-white mx-2" to="#/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white mx-2" to="#/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item text-white mx-2" to="#/">
                    {props.noo}
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-Link disabled text-white mx-2">Disabled</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label className="form-check-label text-white mx-2" for="flexSwitchCheckDefault text-light">
              {props.scolor}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  list: PropTypes.string,
  noo: PropTypes.number,
};

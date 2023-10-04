import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ favourites }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
        <Link className="navbar-brand" to="/">
          Movies
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto ">
            <li className="nav-item active">
              <Link className="fs-4 nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="fs-4 nav-item active">
              <Link className="nav-link" to="tv">
                TV
              </Link>
            </li>
            
            <li className="fs-4 nav-item active">
              <Link className="nav-link" to="favourites">
                <i
                  className="fa-solid fa-heart px-1 fs-3"
                  style={{ color: "#ff0000" }}
                ></i>
                {favourites.length}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

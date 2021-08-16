import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { searchandler } = props;

  const searchHandler = (e) => {
    searchandler(e.target.value);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="nav-left">
          <div className="input-section">
            <label htmlFor="search-input">
              <i className="fa fa-search" aria-hidden="true"></i>
            </label>
            <input
              type="text"
              id="search-input"
              placeholder="Search"
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className="nav-right">
          <Link to="/">
            <i className="fa fa-home" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-left">
          <strong>
            <Link to="/">Movie Details</Link>
          </strong>
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

export default Navbar2;

  
import React from "react";

//Stateless Functional Component

// Object destructuring allows for pulling specific props
// Created simple functional component that display a navbar
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="https://github.com/tindoann" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
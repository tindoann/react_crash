// Created stateless funcitonal component to display the navbar

import React from "react";

// Object destructuring allows for pulling specific props
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="https://github.com/tindoann" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* turns into a javascript variable  */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
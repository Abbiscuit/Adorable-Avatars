import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#333"
  };
  return (
    <nav className="nav">
      <Link style={linkStyle} to="/">
        <h1 className="logo">Adorable Avatar</h1>
      </Link>
      <ul className="nav-item-list">
        <Link style={linkStyle} to="/about">
          <li className="nav-item">About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

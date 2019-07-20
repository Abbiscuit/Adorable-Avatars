import React from 'react';
import { Link } from 'react-router-dom';

import './nav.styles.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="logo">Adorable Avatar</h1>
      </Link>
      <ul className="nav-item-list">
        <Link to="/about">
          <li className="nav-item">アプリについて</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

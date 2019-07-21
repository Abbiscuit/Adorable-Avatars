import React from 'react';
import { Link } from 'react-router-dom';

import { NavContainer, LogoText, NavList, NavItem } from './nav.styles';

const Nav = () => {
  return (
    <NavContainer>
      <Link to="/">
        <LogoText>Adorable Avatar</LogoText>
      </Link>
      <NavList>
        <Link to="/about">
          <NavItem>アプリについて</NavItem>
        </Link>
      </NavList>
    </NavContainer>
  );
};

export default Nav;

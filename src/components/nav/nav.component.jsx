import React from 'react';

import {
  NavContainer,
  LogoText,
  NavList,
  NavItem,
  NavLink
} from './nav.styles';

const Nav = () => {
  return (
    <NavContainer>
      <LogoText to="/">Adorable Avatar</LogoText>
      <NavList>
        <NavItem>
          <NavLink to="/about"> アプリについて</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Nav;

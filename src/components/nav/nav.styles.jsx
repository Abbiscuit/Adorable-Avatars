import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7rem;
  margin-bottom: 3.2rem;
  box-shadow: 0px 0px 6px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 1rem 1rem;
  }
`;

export const LogoText = styled(Link)`
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: 2.4rem;
    margin-top: 2rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
`;

export const NavItem = styled.li`
  display: flex;
  padding: 1rem;
`;

export const NavLink = styled(Link)`
  font-size: 1.4rem;
`;

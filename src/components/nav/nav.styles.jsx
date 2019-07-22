import styled from 'styled-components';

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

export const LogoText = styled.h1`
  font-size: 2rem;

  @media screen and (max-width: 800px) {
    font-size: 2.4rem;
    margin: 1rem;
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
  padding: 0 1rem;
  font-size: 1.4rem;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 10rem;
  height: 4rem;
  font-size: 1.4rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  margin: 1.5rem auto;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
    &:hover {
      opacity: unset;
    }
  }
`;

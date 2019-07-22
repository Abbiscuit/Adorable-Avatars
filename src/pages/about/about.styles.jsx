import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

export const Text = styled.h1`
  font-size: 3.2rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const TextDescription = styled.p`
  font-size: 1.6rem;
`;

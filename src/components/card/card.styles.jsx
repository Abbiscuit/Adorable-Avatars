import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 6px 0 rgba(0, 0, 0, 0.2);

  padding: 2rem;
  margin: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 800px) {
    &:hover {
      opacity: unset;
    }
  }
`;

export const ImageStyle = styled.img`
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
`;

export const CardProfileContainer = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardText = styled.h2`
  margin: 0;
  font-size: 1.6rem;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const CardParagraph = styled.p`
  font-size: 1.4rem;

  @media screen and (max-width: 800px) {
    font-size: 1.8rem;
  }
`;

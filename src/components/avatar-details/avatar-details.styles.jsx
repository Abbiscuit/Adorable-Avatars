import styled, { css } from 'styled-components';

export const AvatarCardContainer = styled.div`
  box-shadow: 0px 0px 6px 0 rgba(0, 0, 0, 0.2);
  width: 30rem;
  height: auto;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1.6rem;
  }

  ${props =>
    props.primary &&
    css`
      box-shadow: none;
    `}  
  }
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 80%;
  height: auto;
  padding: 1rem 0;
  margin: 0 auto;
`;

export const AvatarProfile = styled.div`
  display: flex;
  flex-flow: wrap column;
`;

export const AvatarText = styled.h2`
  font-size: 1.8rem;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const UserNameSpan = styled.span``;

import React from 'react';
import { Link } from 'react-router-dom';

import {
  CardContainer,
  ImageStyle,
  CardProfileContainer,
  CardText,
  CardParagraph
} from './card.styles';

const Card = ({ name, email, id }) => {
  return (
    <CardContainer>
      <Link to={`/avatars/${id}`}>
        <ImageStyle src={`https://robohash.org/${id}?set=set4`} alt="avatars" />
        <CardProfileContainer>
          <CardText>{name}</CardText>
          <CardParagraph>{email}</CardParagraph>
        </CardProfileContainer>
      </Link>
    </CardContainer>
  );
};

export default Card;

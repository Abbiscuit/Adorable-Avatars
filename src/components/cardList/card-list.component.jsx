import React from 'react';
import Card from '../card/card.component';

import uuid from 'uuid/v4';

import { CardListContainer } from './card-list.styles';

const CardList = ({ avatars }) => {
  return (
    <CardListContainer>
      {avatars.map(({ ...otherProps }) => {
        return <Card key={uuid()} {...otherProps} />;
      })}
    </CardListContainer>
  );
};

export default CardList;

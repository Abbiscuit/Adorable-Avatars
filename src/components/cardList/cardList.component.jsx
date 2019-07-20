import React from 'react';
import Card from '../card/card.component';

const CardList = ({ avatars }) => {
  return (
    <div>
      {avatars.map(({ id, ...otherProps }) => {
        return <Card key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default CardList;

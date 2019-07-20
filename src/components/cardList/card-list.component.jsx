import React from 'react';
import Card from '../card/card.component';

import uuid from 'uuid/v4';

import './card-list.styles.scss';

const CardList = ({ avatars }) => {
  return (
    <div className="card-list">
      {avatars.map(({ ...otherProps }) => {
        return <Card key={uuid()} {...otherProps} />;
      })}
    </div>
  );
};

export default CardList;

import React from 'react';
import Card from '../card/card.component';

import './card-list.styles.scss';

const CardList = ({ avatars }) => {
  return (
    <div className="card-list">
      {avatars.map(({ id, ...otherProps }) => {
        return <Card key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default CardList;

import React from 'react';
import Card from '../card/card.component';

const CardList = ({ avatars }) => {
  return (
    <div>
      {avatars.map((map, i) => {
        return (
          <Card
            key={i}
            id={avatars[i].id}
            name={avatars[i].name}
            email={avatars[i].email}
            city={avatars[i].address.city}
          />
        );
      })}
    </div>
  );
};

export default CardList;

import React from 'react';

import './card.styles.scss';

const Card = ({ name, email }) => {
  return (
    <div className="card">
      <img
        src={`https://api.adorable.io/avatars/150/${email}`}
        alt="avatars"
        className="card-image"
      />
      <div>
        <h2 className="card-name">{name}</h2>
        <p className="card-email">{email}</p>
      </div>
    </div>
  );
};

export default Card;

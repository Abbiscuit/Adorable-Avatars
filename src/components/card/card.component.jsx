import React from 'react';
import { Link } from 'react-router-dom';

import './card.styles.scss';

const Card = ({ name, email, id }) => {
  return (
    <Link to={`/${id}`}>
      <div className="card">
        <img
          src={`https://api.adorable.io/avatars/150/${email}`}
          alt="avatars"
          className="card-image"
        />
        <div className="card-profile">
          <h2 className="card-name">{name}</h2>
          <p className="card-email">{email}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';

import './card.styles.scss';

const Card = ({ name, email, id }) => {
  return (
    <Link to={`/avatars/${id}`}>
      <div className="card">
        <img
          src={`https://robohash.org/${id}?set=set4`}
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

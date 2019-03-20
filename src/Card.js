import React from "react";

const Card = ({ name, email, city, id }) => {
  const borderRadius = {
    borderRadius: "50%"
  };
  return (
    <div className="tc dib ma2 pa3 br3 shadow-3 grow">
      <img
        src={`https://api.adorable.io/avatars/150/${id}`}
        alt="avatars"
        style={borderRadius}
      />
      <div>
        <h2>{name}</h2>
        <p className="f4">{email}</p>
        <p className="f5">{city}</p>
      </div>
    </div>
  );
};

export default Card;

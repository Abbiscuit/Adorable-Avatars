import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import Button from '../button/button.component';

import './avatar-details.styles.scss';

const AvatarDetails = ({ match }) => {
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    const getAvatar = async () => {
      const responseAvatar = await fetch(
        `https://jsonplaceholder.typicode.com/users/${match.params.id}`
      );
      const jsonAvatar = await responseAvatar.json();

      setAvatar(jsonAvatar);
    };

    getAvatar();
  }, []);

  {
    const { id, name, username, email, phone, website } = avatar;
    return id ? (
      <div className="avatar-card">
        <img
          src={`https://robohash.org/${match.params.id}?set=set4`}
          alt="avatars"
          className="card-image"
        />

        <div className="avatar-profile">
          <h2 className="name">{`name: ${name}`}</h2>
          <span className="username">{`username: ${username}`}</span>
          <span>{`Email:  ${email}`}</span>
          <span>{`Tel:  ${phone}`}</span>
          <span>{`Web:  ${website}`}</span>
        </div>
        <Button> 戻る </Button>
      </div>
    ) : (
      <div className="avatar-card spinner">
        <Spinner />
      </div>
    );
  }
};

export default AvatarDetails;
/* 


<div className="avatar-card">
        <img
          src={`https://robohash.org/${match.params.id}?set=set4`}
          alt="avatars"
          className="card-image"
        />

        <div className="avatar-profile">
          <h2 className="name">{`name: ${name}`}</h2>
          <span className="username">{`username: ${username}`}</span>
          <span>{`email: ${email}`}</span>
          <span>{`phone: ${phone}`}</span>
          <span>{`web: ${website}`}</span>
        </div>
      </div>

*/

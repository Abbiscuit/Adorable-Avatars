import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import Button from '../button/button.component';

import {
  AvatarCardContainer,
  AvatarImage,
  AvatarProfile,
  AvatarText
} from './avatar-details.styles';

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
      <AvatarCardContainer>
        <AvatarImage
          src={`https://robohash.org/${match.params.id}?set=set4`}
          alt="avatars"
        />

        <AvatarProfile>
          <AvatarText>{name}</AvatarText>
          <span>{`ニックネーム: ${username}`}</span>
          <span>{`Email:  ${email}`}</span>
          <span>{`Tel:  ${phone}`}</span>
          <span>{`Web:  ${website}`}</span>
        </AvatarProfile>
        <Button> Back </Button>
      </AvatarCardContainer>
    ) : (
      <AvatarCardContainer primary>
        <Spinner />
      </AvatarCardContainer>
    );
  }
};

export default AvatarDetails;

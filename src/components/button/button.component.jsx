import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonStyle } from './button.styles';

const Button = props => (
  <Link to="/">
    <ButtonStyle>{props.children}</ButtonStyle>
  </Link>
);

export default Button;

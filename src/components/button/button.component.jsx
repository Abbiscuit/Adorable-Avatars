import React from 'react';
import { Link } from 'react-router-dom';

import './button.styles.scss';

const Button = props => (
  <Link to="/">
    <button className="button">{props.children}</button>
  </Link>
);

export default Button;

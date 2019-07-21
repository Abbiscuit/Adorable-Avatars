import React from 'react';

import { ButtonLink } from './button.styles';

const Button = props => <ButtonLink to="/">{props.children}</ButtonLink>;

export default Button;

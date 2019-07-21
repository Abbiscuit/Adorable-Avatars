import React from 'react';
import { ScrollContainer } from './scroll.styles';

const Scroll = props => {
  return <ScrollContainer>{props.children}</ScrollContainer>;
};

export default Scroll;

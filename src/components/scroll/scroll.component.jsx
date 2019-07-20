import React from 'react';

import './scroll.styles.scss';

const Scroll = props => {
  return <div className="scroll">{props.children}</div>;
};

export default Scroll;

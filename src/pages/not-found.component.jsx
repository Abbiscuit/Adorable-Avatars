import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        No match for <i>{props.location.pathname}</i>
      </h1>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFound;

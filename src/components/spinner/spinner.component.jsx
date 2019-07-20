import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
};

const Spinner = () => {
  const [loading] = useState(true);

  return (
    <div className="sweet-loading" style={{ marginTop: '100px' }}>
      <ClipLoader
        style={override}
        sizeUnit={'px'}
        size={80}
        color={'#81bef1'}
        loading={loading}
      />
    </div>
  );
};

export default Spinner;

import React from 'react';
import { Container, Text } from './not-found.styles';

import Button from '../../components/button/button.component';

const NotFound = () => {
  return (
    <Container>
      <Text>
        お探しのページは見つかりませんでした。
        {/* <i>{props.location.pathname}</i> */}
      </Text>
      <Button>Go Back</Button>
    </Container>
  );
};

export default NotFound;

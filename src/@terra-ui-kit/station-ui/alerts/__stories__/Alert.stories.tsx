import React from 'react';
import { Alert } from '../Alert';

export default {
  title: 'station-ui/Alert',
};

export const Basic = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Alert variant="error">Error Alert</Alert>
      <Alert variant="warning">Warning Alert</Alert>
      <Alert variant="success">Success Alert</Alert>
    </div>
  );
};

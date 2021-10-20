import React from 'react';
import { Button } from '../Button';

export default {
  title: 'station-ui/Button',
};

export const Basic = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 20,
          marginBottom: 20,
        }}
      >
        <Button>default</Button>
        <Button variant="primary">primary</Button>
        <Button variant="danger">danger</Button>
        <Button variant="outline">outline</Button>
      </div>
      <Button fullWidth>fullWidth</Button>
      <Button size="large">large</Button>
      <Button>default size</Button>
      <Button size="medium">medium</Button>
      <Button size="small">outline</Button>
      <Button disabled>Disabled</Button>
    </>
  );
};

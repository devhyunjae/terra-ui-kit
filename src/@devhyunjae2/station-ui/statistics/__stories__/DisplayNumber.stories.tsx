import React from 'react';
import { DisplayNumber } from '../DisplayNumber';

export default {
  title: 'station-ui/DisplayNumber',
};

export const Basic = () => {
  return (
    <>
      <DisplayNumber size="xl" value="123.123456" />
      <DisplayNumber size="lg" value="123.123456" rightText="Luna" />
      <DisplayNumber size="md" value="123.123456" rightText="UST" />
      <DisplayNumber size="sm" value="123.123456" rightText="ETH" />
    </>
  );
};

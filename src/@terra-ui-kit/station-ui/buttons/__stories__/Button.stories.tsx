import { Meta } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';

export default {
  title: 'station-ui/Button',
} as Meta;

export const Basic = () => {
  return <Button>Click</Button>;
};

import { AccessTime } from '@mui/icons-material';
import React from 'react';
import { TextButton } from '../TextButton';

export default {
  title: 'station-ui/TextButton',
};

export const Basic = () => {
  return (
    <>
      <TextButton>text button</TextButton>
      <TextButton hoverEffect>text button</TextButton>
      <TextButton color="primary100">text button</TextButton>
      <TextButton leftIcon={<AccessTime />}>left icon button</TextButton>
      <TextButton rightIcon={<AccessTime />}>right icon button</TextButton>
    </>
  );
};

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
      <TextButton hoverEffect>text with hovereffect</TextButton>
      <TextButton color="primary100">text button</TextButton>
      <TextButton>
        <AccessTime />
        <span>left icon button</span>
      </TextButton>
      <TextButton>
        <span>right icon button</span>
        <AccessTime />
      </TextButton>
      <TextButton
        as="a"
        href="https://google.com"
        target="_blank"
        rel="noreferrer"
      >
        When you need a tag button
      </TextButton>
    </>
  );
};

import React from 'react';
import { Button } from '../..';
import { PageHeader } from '../PageHeader';

export default {
  title: 'station-ui/PageHeader',
};

export const Basic = () => {
  return (
    <>
      <PageHeader title="only title" />
      <PageHeader
        title="title with button"
        extra={<Button>extra buton</Button>}
      />
    </>
  );
};

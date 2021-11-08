import React from 'react';
import { Card } from '../Card';

export default {
  title: 'station-ui/Card',
};

export const Basic = () => {
  return (
    <>
      <Card>only body</Card>
      <div style={{ margin: 20 }} />
      <Card title="with title">body with title</Card>
      <div style={{ margin: 20 }} />
      <Card title="with title" titleBackground>
        body with title + background
      </Card>
      <div style={{ margin: 20 }} />
      <Card size="small">small card</Card>
      <div style={{ margin: 20 }} />
      <Card size="medium1">medium1 card</Card>
      <div style={{ margin: 20 }} />
      <Card size="medium2">medium2 card</Card>
      <div style={{ margin: 20 }} />
      <Card size="large">large card</Card>
    </>
  );
};

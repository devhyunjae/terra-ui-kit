import React from 'react';
import { TopNavigation } from '../TopNavigation';

export default {
  title: 'station-ui/TopNavigation',
};

export const Basic = () => {
  return (
    <>
      <TopNavigation
        title="Title with backbutton"
        onClickBack={() => alert('clicked back')}
      ></TopNavigation>
      <div style={{ margin: '20px 0px' }}></div>
      <TopNavigation
        title="Title with button+extra"
        onClickBack={() => alert('clicked back')}
        extra={<div>Enter extra components here</div>}
      ></TopNavigation>
      <div style={{ margin: '20px 0px' }}></div>
      <TopNavigation title="Only Title"></TopNavigation>
    </>
  );
};

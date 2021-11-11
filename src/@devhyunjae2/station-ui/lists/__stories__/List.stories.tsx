import React from 'react';
import { List, ListItem } from '../List';

export default {
  title: 'station-ui/List',
};

export const Basic = () => {
  return (
    <>
      <List>
        <ListItem>Medium size</ListItem>
        <ListItem>New wallet</ListItem>
        <ListItem>Recover existing wallet</ListItem>
      </List>
      <div style={{ margin: 30 }} />
      <List size="small">
        <ListItem>Small size</ListItem>
        <ListItem>New wallet</ListItem>
        <ListItem>Recover existing wallet</ListItem>
      </List>
      <div style={{ margin: 30 }} />
      <List size="large">
        <ListItem>Large size</ListItem>
        <ListItem>New wallet</ListItem>
        <ListItem>Recover existing wallet</ListItem>
      </List>
    </>
  );
};

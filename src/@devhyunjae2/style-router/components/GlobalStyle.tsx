import React from 'react';
import { useStyle } from '../router/StyleRouter';
import { DarkStyle } from './DarkStyle';
import { LightStyle } from './LightStyle';

const GlobalStyle = () => {
  const { color } = useStyle();
  return color === 'light' ? <LightStyle /> : <DarkStyle />;
};

export { GlobalStyle };

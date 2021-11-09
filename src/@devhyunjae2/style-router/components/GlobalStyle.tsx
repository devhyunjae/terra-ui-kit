import React from 'react';
import { useStyle } from '../router/StyleRouter';
import { DarkStyle } from './DarkStyle';
import { LightStyle } from './LightStyle';

const GlobalStyle = ({ resetCss }: { resetCss?: boolean }) => {
  const { color } = useStyle();
  return color === 'light' ? (
    <LightStyle resetCss={resetCss} />
  ) : (
    <DarkStyle resetCss={resetCss} />
  );
};

export { GlobalStyle };

import { Breakpoint, StyleRouter } from '@devhyunjae2/style-router';
import React, { ReactNode } from 'react';
import { GlobalStyle } from './GlobalStyle';

const breakpoints: Breakpoint[] = [
  ['small', '<=530'],
  ['medium', '>530 and <=830'],
  ['large', '>830 and <=1440'],
  ['xlarge', '>1440'],
];

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyleRouter
      defaultColor="dark"
      breakpoints={breakpoints}
      fallbackBreakpoint="large"
    >
      <GlobalStyle />
      {children}
    </StyleRouter>
  );
}

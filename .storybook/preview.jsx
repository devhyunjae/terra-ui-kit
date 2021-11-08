import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  Breakpoint,
  CssRoute,
  StaticStyleRouter,
} from '../src/@devhyunjae2/style-router';
import { theme } from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme,
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: 'dark',
      },
      {
        name: 'light',
        value: 'light',
      },
    ],
  },
};

export const decorators = [
  (Story, { globals }) => (
    <StaticStyleRouter
      breakpoint="large"
      color={globals?.backgrounds?.value === 'light' ? 'light' : 'dark'}
    >
      <CssRoute href={({ color }) => `/styles/colors/${color}.css`} />
      <CssRoute
        href={({ breakpoint }) => `/styles/layouts/${breakpoint}.css`}
      />

      <Story />
    </StaticStyleRouter>
  ),
];

export const DocGlobalStyle = createGlobalStyle`
  .docs-story {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

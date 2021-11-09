import React, { FC } from 'react';
import styled from 'styled-components';
import breakpoints from '../theme/breakpoints';
import { BasicProps } from './entities';

interface LayoutProps extends BasicProps {
  inner?: boolean;
  hasSider?: boolean;
}

const Layout: FC<LayoutProps> = (props) => {
  return <Container {...props} />;
};

const Container = styled('div')<LayoutProps>`
  display: flex;
  flex: auto;
  flex-direction: ${({ hasSider = false }) => (hasSider ? 'row' : 'column')};
  min-height: 0;
  padding-left: ${({ inner }) => (inner ? '220px' : '0')};
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export { Layout };

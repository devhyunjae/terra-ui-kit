import React, { FC } from 'react';
import styled from 'styled-components';
import { BasicProps } from './entities';

interface LayoutProps extends BasicProps {
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
`;

export { Layout };

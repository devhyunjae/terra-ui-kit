import React, { FC } from 'react';
import styled from 'styled-components';
import breakpoints from '../theme/breakpoints';
import { BasicProps } from './entities';

const Sider: FC<BasicProps> = (props) => {
  return <Container {...props} />;
};

const Container = styled('aside')`
  width: 220px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary500);
  color: var(--color-white);
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export { Sider };

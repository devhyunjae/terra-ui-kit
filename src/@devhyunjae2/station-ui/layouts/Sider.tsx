import React, { FC } from 'react';
import styled from 'styled-components';
import { BasicProps } from './entities';

const Sider: FC<BasicProps> = (props) => {
  return <Container {...props} />;
};

const Container = styled('aside')`
  width: 220px;
  background-color: var(--color-primary500);
  color: var(--color-white);
`;

export { Sider };

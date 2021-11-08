import React, { FC } from 'react';
import styled from 'styled-components';
import { BasicProps } from './entities';

const Footer: FC<BasicProps> = (props) => {
  return <Container {...props} />;
};

const Container = styled('footer')`
  flex: 0 0 auto;
  padding: 24px 50px;
`;

export { Footer };

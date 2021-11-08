import React, { FC } from 'react';
import styled from 'styled-components';
import { BasicProps } from './entities';

const Content: FC<BasicProps> = (props) => {
  return <Container {...props} />;
};

const Container = styled('main')``;

export { Content };

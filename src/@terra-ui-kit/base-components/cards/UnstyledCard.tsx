import { fixHMR } from 'fix-hmr';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface UnstyledCardProps extends HTMLAttributes<HTMLDivElement> {}

function UnstyledCardBase(props: UnstyledCardProps) {
  return <div {...props} />;
}

const _UnstyledCard = styled(UnstyledCardBase)`
  // common styling - e.g. position and z-index of modal
`;

export const UnstyledCard = fixHMR(_UnstyledCard);

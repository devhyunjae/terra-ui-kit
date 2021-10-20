import { fixHMR } from 'fix-hmr';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface UnstyledPageHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

function UnstyledPageHeaderBase(props: UnstyledPageHeaderProps) {
  return <div {...props} />;
}

const _UnstyledPageHeader = styled(UnstyledPageHeaderBase)`
  // common styling - e.g. position and z-index of modal
`;

export const UnstyledPageHeader = fixHMR(_UnstyledPageHeader);

import { fixHMR } from 'fix-hmr';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface UnstyledMenuItemProps extends HTMLAttributes<HTMLDivElement> {}

function UnstyledMenuItemBase(props: UnstyledMenuItemProps) {
  return <div {...props} />;
}

const _UnstyledMenuItem = styled(UnstyledMenuItemBase)`
  // common styling - e.g. position and z-index of modal
`;

export const UnstyledMenuItem = fixHMR(_UnstyledMenuItem);

import { fixHMR } from 'fix-hmr';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
export interface UnstyledSelectProps extends HTMLAttributes<HTMLDivElement> {}

function UnstyledSelectBase(props: UnstyledSelectProps) {
  return <div {...props} />;
}
const _UnstyledSelect = styled(UnstyledSelectBase)`
  // common styling - e.g. position and z-index of modal
`;
export const UnstyledSelect = fixHMR(_UnstyledSelect);

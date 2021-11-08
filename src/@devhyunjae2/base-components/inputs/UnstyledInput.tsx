import { fixHMR } from 'fix-hmr';
import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface UnstyledInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function UnstyledInputBase(props: UnstyledInputProps) {
  return <input {...props} />;
}

const _UnstyledInput = styled(UnstyledInputBase)`
  // common styling - e.g. position and z-index of modal
`;

export const UnstyledInput = fixHMR(_UnstyledInput);

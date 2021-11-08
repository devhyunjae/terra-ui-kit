import { fixHMR } from 'fix-hmr';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';

export interface UnstyledButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function UnstyledButtonBase(buttonProps: UnstyledButtonProps) {
  return <button {...buttonProps} />;
}

const _UnstyledButton = styled(UnstyledButtonBase)`
  // common styling - e.g. position and z-index of modal
`;

export const UnstyledButton = fixHMR(_UnstyledButton);

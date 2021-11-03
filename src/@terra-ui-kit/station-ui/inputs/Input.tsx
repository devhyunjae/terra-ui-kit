import {
  UnstyledInput,
  UnstyledInputProps,
} from '@terra-ui-kit/base-components';
import { fixHMR } from 'fix-hmr';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { InputLabel } from './InputLabel';
import { baseInputStyle, errorInputStyle } from './styles';

export interface InputProps extends UnstyledInputProps {
  fullWidth?: boolean;
  error?: boolean;
  className?: string;
  label?: string | ReactNode;
  errorMessage?: string;
}

function InputBase({ label, errorMessage, ...restProps }: InputProps) {
  return (
    <div>
      {label && <InputLabel>{label}</InputLabel>}
      <UnstyledInput {...restProps} />
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  );
}

const _Input = styled(InputBase)`
  font-size: 14px;
  outline: none;
  padding: 12px;
  ${baseInputStyle}
  ${({ error = false }) => error && errorInputStyle}
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'auto')};
`;

export const Input = fixHMR(_Input);

const InputErrorMessage = styled('p')`
  margin: 3px 0 0 0;
  font-size: 12px;
  color: var(--color-danger01);
`;

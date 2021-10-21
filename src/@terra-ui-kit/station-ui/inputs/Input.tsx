import {
  UnstyledInput,
  UnstyledInputProps,
} from '@terra-ui-kit/base-components';
import { fixHMR } from 'fix-hmr';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

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
  border: solid 1px var(--color-desaturated400);
  padding: 12px;
  border-radius: 8px;
  color: var(--color-primary400);
  caret-color: var(--color-primary100);
  ::placeholder {
    opacity: 0.5;
  }
  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    border: solid 1px var(--color-primary100);
  }
  &:read-only,
  &:disabled {
    background-color: var(--color-desaturated300);
    border: solid 1px var(--color-desaturated400);
    cursor: not-allowed;
  }
  &:disabled {
    opacity: 0.5;
  }
  ${({ error = false }) =>
    error &&
    css`
      border: solid 1px var(--color-danger01) !important;
    `}
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'auto')};
`;

export const Input = fixHMR(_Input);

const InputLabel = styled('div')`
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
`;

const InputErrorMessage = styled('p')`
  margin: 3px 0 0 0;
  font-size: 12px;
  color: var(--color-danger01);
`;

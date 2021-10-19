import {
  UnstyledButton,
  UnstyledButtonProps,
} from '@terra-ui-kit/base-components';
import { fixHMR } from 'fix-hmr';
import React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends Omit<UnstyledButtonProps, 'ref'> {}

function ButtonBase(buttonProps: ButtonProps) {
  return <UnstyledButton {...buttonProps} />;
}

const _Button = styled(ButtonBase)`
  background-color: var(--color-gray18);
  color: var(--color-white80);

  padding: var(--button-padding);

  font-size: 1em;
`;

export const Button = fixHMR(_Button);

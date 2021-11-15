import {
  UnstyledButton,
  UnstyledButtonProps,
} from '@devhyunjae2/base-components';
import { fixHMR } from 'fix-hmr';
import React from 'react';
import styled, { css } from 'styled-components';
import { Size, Variant } from '../theme/entities';

export interface ButtonProps extends Omit<UnstyledButtonProps, 'ref'> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
}

function ButtonBase({ fullWidth, ...buttonProps }: ButtonProps) {
  return <UnstyledButton {...buttonProps} />;
}

const variantStyles = {
  primary: css`
    background-color: var(--color-primary300);
    color: var(--color-gray100);
  `,
  danger: css`
    background-color: var(--color-danger01);
    color: var(--color-gray100);
  `,
  outline: css`
    background-color: transparent;
    color: var(--color-primary400);
    border: 1px solid var(--color-primary400);
  `,
  default: css`
    background-color: var(--color-desaturated300);
    color: var(--color-primary400);
  `,
};

const sizeStyles = {
  large: css`
    padding: 18px 20px;
  `,
  medium: css`
    min-width: 100px;
    padding: 10px 20px;
  `,
  small: css`
    min-width: 100px;
    padding: 5px 20px;
  `,
  default: css``,
};

const _Button = styled(ButtonBase)`
  border: 0;
  outline: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  min-width: 150px;
  padding: 13px 20px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(0.95);
  }
  ${({ variant = 'default' }) => variantStyles[variant]}
  ${({ size = 'default' }) => sizeStyles[size]}
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'auto')};
  ${({ disabled = false }) =>
    disabled
      ? css`
          opacity: 0.3;
          cursor: not-allowed;
          &:hover {
            filter: none;
          }
        `
      : null};
`;

export const Button = fixHMR(_Button);

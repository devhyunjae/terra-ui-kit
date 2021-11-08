import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: 'medium' | 'small';
  variant?: 'round' | 'rectangle';
  color?: 'blue' | 'green' | 'purple' | 'red';
}

const Tag = ({ ...props }: Props) => {
  return <Container {...props} />;
};

const sizeStyles = {
  small: css`
    font-size: 11px;
    padding: 3px 5px;
    border-radius: 10px;
    line-height: normal;
  `,
  medium: null,
};

const colorStyles = {
  blue: null,
  green: css`
    background-color: var(--color-success01);
  `,
  purple: css`
    background-color: var(--color-purple01);
  `,
  red: css`
    background-color: var(--color-danger01);
  `,
};

const variantStyles = {
  round: null,
  rectangle: css`
    min-width: 40px;
    border-radius: 2px;
  `,
};

const Container = styled('div')<Props>`
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  border-radius: 11px;
  background-color: var(--color-primary100);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-gray100);
  ${({ size = 'medium' }) => sizeStyles[size]}
  ${({ color = 'blue' }) => colorStyles[color]}
  ${({ variant = 'round' }) => variantStyles[variant]}
`;

export { Tag };

import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: 'round' | 'line';
  selected?: boolean;
  className?: string;
}

const variantStyles = (selected = false) => ({
  round: css`
    padding: 2px 14px;
    border-radius: 11px;
    ${selected &&
    css`
      font-weight: 500;
      background-color: var(--color-primary300);
      color: var(--color-gray100);
    `}
  `,
  line: css`
    padding: 0 14px 6px 14px;
    ${selected &&
    css`
      font-weight: 500;
      border-bottom: 2px solid var(--color-primary400);
    `}
  `,
});

const Tab = ({ ...props }: Props) => {
  return <Container {...props} />;
};

const Container = styled('div')<Props>`
  min-width: 60px;
  cursor: pointer;
  font-size: 12px;
  color: var(--color-primary400);
  ${({ variant = 'round', selected = false }) =>
    variantStyles(selected)[variant]}
`;

export { Tab };

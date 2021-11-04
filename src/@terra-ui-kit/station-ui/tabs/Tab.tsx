import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: 'round' | 'line' | 'rectangle';
  selected?: boolean;
  className?: string;
}

const variantStyles = (selected = false) => ({
  round: css`
    padding: 2px 14px;
    border-radius: 11px;
    &:hover {
      text-decoration: underline;
    }
    ${selected &&
    css`
      font-weight: 500;
      background-color: var(--color-primary300);
      color: var(--color-gray100);
      &:hover {
        text-decoration: none;
      }
    `}
  `,
  line: css`
    padding: 0 14px 6px 14px;
    color: var(--color-desaturated800);
    &:hover {
      color: var(--color-primary400);
    }
    ${selected &&
    css`
      font-weight: 500;
      border-bottom: 2px solid var(--color-primary400);
      color: var(--color-primary400);
    `}
  `,
  rectangle: css`
    font-size: 13px;
    font-weight: 500;
    color: var(--color-desaturated800);
    padding: 23px 41px 22px;
    border: solid 1px var(--color-desaturated300);
    background-color: var(--color-desaturated200);
    &:hover {
      color: var(--color-primary400);
    }
    ${selected &&
    css`
      background-color: var(--color-white);
      color: var(--color-primary400);
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

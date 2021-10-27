import { UnstyledCard, UnstyledCardProps } from '@terra-ui-kit/base-components';
import { fixHMR } from 'fix-hmr';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface CardProps extends Omit<UnstyledCardProps, 'title'> {
  title?: string | ReactNode | undefined;
  titleBackground?: boolean;
  size?: 'small' | 'medium1' | 'medium2' | 'default' | 'large';
}

function CardBase({
  title,
  titleBackground,
  children,
  ...restProps
}: CardProps) {
  return (
    <UnstyledCard {...restProps}>
      {title && <section>{title}</section>}
      <div>{children}</div>
    </UnstyledCard>
  );
}

const sizeStyles = {
  small: css`
    padding: 16px 20px;
  `,
  medium1: css`
    padding: 20px;
  `,
  medium2: css`
    padding: 20px 28px;
  `,
  default: css`
    padding: 28px;
  `,
  large: css`
    padding: 40px 28px;
  `,
};

const _Card = styled(CardBase)`
  border-radius: 8px;
  border: solid 1px var(--color-desaturated300);
  background-color: var(--color-white);
  > section {
    display: flex;
    align-items: center;
    ${({ size = 'default' }) => sizeStyles[size]}
    border-bottom: 1px solid var(--color-desaturated300);
    ${({ titleBackground }) =>
      titleBackground
        ? css`
            background-color: var(--color-desaturated100);
          `
        : null}
  }
  > div {
    ${({ size = 'default' }) => sizeStyles[size]}
  }
`;

export const Card = fixHMR(_Card);

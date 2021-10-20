import { UnstyledCard, UnstyledCardProps } from '@terra-ui-kit/base-components';
import { fixHMR } from 'fix-hmr';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface CardProps extends Omit<UnstyledCardProps, 'title'> {
  title?: string | ReactNode | undefined;
  titleBackground?: boolean;
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

const _Card = styled(CardBase)`
  border-radius: 8px;
  border: solid 1px var(--color-desaturated300);
  background-color: var(--color-white);
  > section {
    padding: 28px;
    border-bottom: 1px solid var(--color-desaturated300);
    ${({ titleBackground }) =>
      titleBackground
        ? css`
            background-color: var(--color-desaturated100);
          `
        : null}
  }
  > div {
    padding: 28px;
  }
`;

export const Card = fixHMR(_Card);

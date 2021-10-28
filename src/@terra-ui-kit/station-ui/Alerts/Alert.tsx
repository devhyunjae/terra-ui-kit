import { CheckCircle, Error } from '@mui/icons-material';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  variant: 'error' | 'warning' | 'success';
  children: ReactNode;
  className?: string;
}

const Alert = ({ variant, children, className }: Props) => {
  return (
    <Container variant={variant} className={className}>
      {alertStyles[variant].icon}
      {children}
    </Container>
  );
};

const alertStyles = {
  error: {
    icon: <Error />,
    css: css`
      background-color: var(--color-bg-danger01);
      color: var(--color-danger01);
    `,
  },
  warning: {
    icon: <Error />,
    css: css`
      background-color: var(--color-bg-warning01);
      color: var(--color-warning01);
    `,
  },
  success: {
    icon: <CheckCircle />,
    css: css`
      background-color: var(--color-bg-success01);
      color: var(--color-success01);
    `,
  },
};

const Container = styled('div')<Props>`
  font-size: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  width: 423px;
  min-height: 35px;
  padding: 8px;
  border-radius: 5px;
  ${({ variant }) => alertStyles[variant].css}
  > svg {
    font-size: 18px;
  }
`;

export { Alert };

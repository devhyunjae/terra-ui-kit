import React from 'react';
import styled, { css } from 'styled-components';
import { BaseProps } from '../types/BaseProps';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface Props extends BaseProps {
  value: number | string;
  size?: Size;
  rightText?: string;
}

const sizeStyles = {
  xl: css`
    font-size: 28px;
    font-weight: 500;
  `,
  lg: css`
    font-size: 20px;
    font-weight: 500;
  `,
  md: css`
    font-size: 16px;
    font-weight: 500;
  `,
  sm: css`
    font-size: 14px;
  `,
};

const DisplayNumber = ({ value, size, rightText, ...restProps }: Props) => {
  const [big, small] = value.toString().split('.');

  return (
    <Container size={size} {...restProps}>
      {big}
      {small && <Small>{`.${small}`}</Small>}
      {rightText && <RightText>{rightText}</RightText>}
    </Container>
  );
};

const Container = styled('p')<{ size?: Size }>`
  margin: 0;
  font-size: 14px;
  ${({ size = 'md' }) => sizeStyles[size]}
`;

const Small = styled('small')`
  font-size: 12px;
`;

const RightText = styled(Small)`
  margin-left: 2px;
`;

export { DisplayNumber };

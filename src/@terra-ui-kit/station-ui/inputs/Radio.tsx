import React from 'react';
import styled, { css } from 'styled-components';
import { RadioType, useRadioContext } from './radioContext';

interface Props {
  value: RadioType;
  className?: string;
  checked?: boolean;
  color?: 'default' | 'blue';
  disabled?: boolean;
}

interface ColorProps {
  color: 'default' | 'blue';
}

const Radio = ({ value, checked, color = 'default', disabled }: Props) => {
  const { selectedRadio, onChange } = useRadioContext();
  const selected = selectedRadio === value;
  return (
    <Container onClick={() => !disabled && onChange(value)} disabled={disabled}>
      {(selected || checked) && <Selected color={color} />}
    </Container>
  );
};

const Container = styled('div')<{ disabled?: boolean }>`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: solid 1px var(--color-desaturated400);
  ${({ disabled = false }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

const Selected = styled('div')<ColorProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-primary400);
  ${({ color }) =>
    color === 'blue' &&
    css`
      background-color: var(--color-white);
    `}
`;

export { Radio };

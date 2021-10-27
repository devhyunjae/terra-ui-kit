import React from 'react';
import styled, { css } from 'styled-components';
import { RadioType, useRadioContext } from './radioContext';

interface Props {
  value: RadioType;
  className?: string;
  checked?: boolean;
  color?: 'default' | 'blue';
}

interface ColorProps {
  color: 'default' | 'blue';
}

const Radio = ({ value, checked, color = 'default' }: Props) => {
  const { selectedRadio, onChange } = useRadioContext();
  const selected = selectedRadio === value;
  return (
    <Container onClick={() => onChange(value)}>
      {(selected || checked) && <Selected color={color} />}
    </Container>
  );
};

const Container = styled('div')`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: solid 1px var(--color-desaturated400);
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

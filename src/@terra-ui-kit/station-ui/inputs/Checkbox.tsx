import React from 'react';
import styled, { css } from 'styled-components';

type ColorType = 'default' | 'blue';

interface Props {
  checked: boolean;
  onClick: () => void;
  label?: string;
  className?: string;
  color?: ColorType;
}

interface ColorProps {
  color: ColorType;
}

const Checkbox = ({
  checked,
  onClick,
  label,
  className,
  color = 'default',
}: Props) => {
  return (
    <Container onClick={onClick} className={className}>
      <CheckboxContainer color={color}>
        {checked && <Checked color={color} />}
      </CheckboxContainer>
      {label && <Label>{label}</Label>}
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  cursor: pointer;
  width: fit-content;
`;

const CheckboxContainer = styled('div')<ColorProps>`
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: solid 1px var(--color-desaturated400);
  ${({ color }) =>
    color === 'blue' &&
    css`
      border: solid 1px var(--color-desaturated800);
      background-color: var(--color-primary400);
    `}
`;

const Checked = styled('div')<ColorProps>`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background-color: var(--color-primary400);
  ${({ color }) =>
    color === 'blue' &&
    css`
      background-color: var(--color-white);
    `}
`;

const Label = styled('p')`
  margin: 0;
  margin-left: 8px;
  font-size: 12px;
  color: var(--color-primary400);
`;

export { Checkbox };

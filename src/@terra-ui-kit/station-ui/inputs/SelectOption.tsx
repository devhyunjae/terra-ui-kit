import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useSelectContext } from './selectContext';

interface SelectOptionProps {
  value: string | number;
  disabled?: boolean;
  selected?: boolean;
}

const SelectOptionContainer = styled('li')<{ selected?: boolean }>`
  list-style-type: none;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  &:hover {
    background-color: var(--color-desaturated100);
  }
  ${({ selected = false }) =>
    selected &&
    css`
      background-color: var(--color-desaturated100);
      font-weight: 500;
    `}
`;

const SelectOption: FC<SelectOptionProps> = ({ children, value }) => {
  const { changeSelectedOption } = useSelectContext();
  return (
    <SelectOptionContainer onClick={() => changeSelectedOption(value)}>
      {children}
    </SelectOptionContainer>
  );
};

export { SelectOption };

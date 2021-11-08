import { fixHMR } from 'fix-hmr';
import React, { FC, ReactNode, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import useOnClickOutside from '../hooks/useOnClickOutside';
import { OptionType, SelectContext } from './selectContext';

interface Props {
  children: ReactNode;
  onChange: (selectedValue: OptionType) => void;
  defaultValue?: OptionType;
}

const _Select: FC<Props> = ({ children, defaultValue, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<OptionType>(
    defaultValue || '',
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const selectContainerRef = useRef(null);

  useOnClickOutside(selectContainerRef, () => setShowDropdown(false));

  return (
    <SelectContext.Provider
      value={{
        selectedOption,
        changeSelectedOption: (selectedValue: OptionType) => {
          setSelectedOption(selectedValue);
          setShowDropdown(false);
          onChange(selectedValue);
        },
      }}
    >
      <Container ref={selectContainerRef}>
        <ShowBox onClick={() => setShowDropdown(!showDropdown)}>
          <div>{selectedOption}</div>
          <ArrowDropDownIcon />
        </ShowBox>
        <SelectDropdown showDropdown={showDropdown}>{children}</SelectDropdown>
      </Container>
    </SelectContext.Provider>
  );
};

const Container = styled('div')`
  width: 280px;
  position: relative;
`;

const ShowBox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 45px;
  cursor: pointer;
  padding: 12px 15px 12px 12px;
  border-radius: 8px;
  border: solid 1px var(--color-primary100);
`;

const SelectDropdown = styled('ul')<{ showDropdown?: boolean }>`
  z-index: var(--zindex-dropdown);
  margin: 0;
  position: absolute;
  margin-top: 2px;
  width: 100%;
  padding: 6px 1px 14px;
  border-radius: 4px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--color-desaturated400);
  background-color: var(--color-white);
  ${({ showDropdown }) =>
    !showDropdown &&
    css`
      display: none;
    `}
`;

export const Select = fixHMR(_Select);

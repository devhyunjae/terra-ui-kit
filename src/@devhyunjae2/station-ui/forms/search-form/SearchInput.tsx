import { Search } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ searchValue, setSearchValue }: Props) => {
  return (
    <Container>
      <StyledInput
        value={searchValue}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Search />
    </Container>
  );
};

const Container = styled('div')`
  padding: 16px 20px;
  background-color: var(--color-desaturated200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledInput = styled('input')`
  min-width: 0;
  padding: 0;
  border: none;
  outline: none;
  color: var(--color-primary400);
  caret-color: var(--color-primary400);
  background-color: transparent;
  font-size: 14px;
  line-height: 1.5;
  font-family: inherit;
  ::placeholder {
    color: var(--color-desaturated800);
  }
`;

export { SearchInput };

import React from 'react';
import styled from 'styled-components';
import { Column } from './entities';

interface Props {
  columns: Column[];
}

const HeaderRow = styled('div')`
  font-size: 12px;
  font-weight: 500;
  padding: 12px 0px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid var(--color-desaturated300);
`;

const HeaderCell = styled('div')`
  flex: 1;
`;

const TableHeader = ({ columns }: Props) => {
  return (
    <HeaderRow>
      {columns.map((column: Column) => {
        return <HeaderCell key={column.key}>{column.title}</HeaderCell>;
      })}
    </HeaderRow>
  );
};

export { TableHeader };

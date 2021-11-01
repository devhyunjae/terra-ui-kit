import React from 'react';
import styled from 'styled-components';
import { Column, DataSource } from './entities';

interface Props {
  dataSource: DataSource[];
  columns: Column[];
}

const TableBody = ({ dataSource, columns }: Props) => {
  return (
    <>
      {dataSource.map((data: DataSource, i: number) => {
        return (
          <BodyRow key={data.key}>
            {columns.map((column: Column) => {
              return <BodyCell>{data[column.dataIndex]}</BodyCell>;
            })}
          </BodyRow>
        );
      })}
    </>
  );
};

const BodyRow = styled('div')`
  padding: 20px 0px;
  display: flex;
  font-size: 14px;
  line-height: 1.36;
  border-bottom: 1px solid var(--color-desaturated300);
  gap: 20px;
`;

const BodyCell = styled('div')`
  flex: 1;
`;

export { TableBody };

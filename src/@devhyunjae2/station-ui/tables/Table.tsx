import React from 'react';
import styled from 'styled-components';
import { Column, DataSource } from './entities';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';

interface Props {
  dataSource: DataSource[];
  columns: Column[];
}

const Table = ({ columns, dataSource }: Props) => {
  return (
    <Container>
      <TableHeader columns={columns} />
      <TableBody columns={columns} dataSource={dataSource} />
    </Container>
  );
};

const Container = styled('div')`
  width: 100%;
`;

export { Table };

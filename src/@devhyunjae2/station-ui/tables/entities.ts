import { ReactNode } from 'react';

export interface DataSource {
  key: string;
  [key: string]: ReactNode;
}

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

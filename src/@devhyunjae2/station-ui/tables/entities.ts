import { ReactNode } from 'react';

export interface DataSource {
  key?: string;
  [key: string]: any;
}

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  render?: (value: any) => ReactNode;
}

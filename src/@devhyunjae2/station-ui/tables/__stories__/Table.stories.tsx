import React from 'react';
import { Table } from '../Table';

export default {
  title: 'station-ui/Table',
};

export const Basic = () => {
  const dataSource = [
    {
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: 'John',
      age: 42,
      address: '22 John Street',
    },
  ];

  const columns = [
    {
      title: '12312',
      dataIndex: 'name',
      key: 'name',
      render: (value: string) => {
        return `Hello my name is ${value}`;
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (value: number) => {
        return value > 40 ? 'i am old. secret :)' : value;
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

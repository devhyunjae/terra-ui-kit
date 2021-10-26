import React from 'react';
import { Pagination } from '../Pagination';

export default {
  title: 'station-ui/Pagination',
};

export const Basic = () => {
  return (
    <>
      <Pagination totalPages={5} />
      <div style={{ margin: 20 }} />
      <Pagination
        onChange={(current) => {
          alert(`current page: ${current}`);
        }}
        totalPages={50}
      />
      <div style={{ margin: 20 }} />
      <Pagination
        defaultCurrentPage={24}
        onChange={(current) => {
          alert(`current page: ${current}`);
        }}
        totalPages={50}
      />
    </>
  );
};

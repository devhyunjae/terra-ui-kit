import React from 'react';
import { Collapse } from '../Collapse';

export default {
  title: 'station-ui/Collapse',
};

export const Basic = () => {
  return (
    <>
      <Collapse
        title={
          <div
            style={{
              border: '1px solid #cfd8ea',
              padding: 20,
            }}
          >
            You need to create your own collapse header
          </div>
        }
      >
        <div
          style={{
            backgroundColor: '#f9faff',
            padding: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </Collapse>
    </>
  );
};

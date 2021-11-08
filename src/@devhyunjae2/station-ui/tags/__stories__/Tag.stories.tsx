import React from 'react';
import { Tag } from '../Tag';

export default {
  title: 'station-ui/Tag',
};

export const Basic = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 20,
        }}
      >
        <Tag>Default</Tag>
        <Tag color="green">Green</Tag>
        <Tag color="purple">Purple</Tag>
        <Tag color="red">Red</Tag>
      </div>
      <div
        style={{
          margin: '20px 0px',
          display: 'flex',
          gap: 20,
        }}
      >
        <Tag size="small">Small</Tag>
        <Tag size="small" color="green">
          Green
        </Tag>
        <Tag size="small" color="purple">
          Purple
        </Tag>
        <Tag size="small" color="red">
          Red
        </Tag>
      </div>
      <div
        style={{
          margin: '20px 0px',
          display: 'flex',
          gap: 20,
          alignItems: 'flex-start',
        }}
      >
        <Tag size="small" variant="rectangle">
          Rectangle
        </Tag>
        <Tag size="small" color="green" variant="rectangle">
          Green
        </Tag>
        <Tag size="medium" color="purple" variant="rectangle">
          Purple Medium
        </Tag>
        <Tag size="medium" color="red" variant="rectangle">
          Red Medium
        </Tag>
      </div>
    </>
  );
};

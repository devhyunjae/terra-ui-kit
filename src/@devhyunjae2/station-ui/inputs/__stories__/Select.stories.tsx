import React, { useState } from 'react';
import { Select } from '../Select';

export default {
  title: 'station-ui/Select',
};

export const Basic = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  return (
    <>
      <Select
        value={selectedValue}
        onChange={(v) => {
          setSelectedValue(v.target.value);
        }}
      >
        <option value="1">111111111</option>
        <option value="2">2111111111111111111</option>
        <option value="3">3111111111111111111111111111</option>
      </Select>
      {`Selected value: ${selectedValue}`}
      <Select size="medium">
        <option value="1">111111111</option>
        <option value="2">2111111111111111111</option>
        <option value="3">3111111111111111111111111111</option>
      </Select>
      <Select size="small">
        <option value="1">111111111</option>
        <option value="2">2111111111111111111</option>
        <option value="3">3111111111111111111111111111</option>
      </Select>
    </>
  );
};

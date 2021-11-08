import React, { useState } from 'react';
import { Select } from '../Select';
import { SelectOption } from '../SelectOption';

export default {
  title: 'station-ui/Select',
};

export const Basic = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  return (
    <>
      <Select
        onChange={(v) => {
          setSelectedValue(v);
        }}
      >
        <SelectOption value={1}>1</SelectOption>
        <SelectOption value={2}>2</SelectOption>
        <SelectOption value={3}>3</SelectOption>
      </Select>
      {`Selected value: ${selectedValue}`}
    </>
  );
};

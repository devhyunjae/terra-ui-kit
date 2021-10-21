import React, { ChangeEvent, useState } from 'react';
import { Input } from '../Input';

export default {
  title: 'station-ui/Input',
};

export const Basic = () => {
  const [inputValue, setInputValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder="with placeholder"
      />
      <Input
        value={'read only'}
        onChange={onChange}
        placeholder="hello world"
        fullWidth
        readOnly
      />
      <Input
        value={'disabled'}
        onChange={onChange}
        placeholder="hello world"
        fullWidth
        disabled
      />
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder="error"
        fullWidth
        error
      />
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder="with label"
        fullWidth
        label="With Label"
      />
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder="error"
        fullWidth
        error
        label="With Label222"
        errorMessage={'With error message'}
      />
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder="error"
        fullWidth
        error
        label={
          <>
            <p>Error</p>
            <p>Available: {(100000 as number).toLocaleString()}</p>
          </>
        }
        errorMessage={'With error message'}
      />
    </div>
  );
};

import React, { useState } from 'react';
import { CodeEditor } from '../CodeEditor';

export default {
  title: 'station-ui/CodeEditor',
};

export const Basic = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <h2>JSON Format Editor</h2>
      <CodeEditor onChange={(v) => setValue(v)} label="Label for code editor" />
      {`entered result: ${value}`}
    </>
  );
};

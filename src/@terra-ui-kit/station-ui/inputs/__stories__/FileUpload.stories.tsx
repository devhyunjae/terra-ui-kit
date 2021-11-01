import React from 'react';
import { FileUpload } from '../FileUpload';

export default {
  title: 'station-ui/FileUpload',
};

export const Basic = () => {
  return (
    <>
      <FileUpload
        onChange={(file) => {
          alert(
            JSON.stringify(
              {
                name: file?.name,
                size: file?.size,
                type: file?.type,
              },
              null,
              2,
            ),
          );
        }}
      />
      <div style={{ margin: 20 }} />
      <FileUpload onChange={() => {}} errorMessage="Something is wrong" />
    </>
  );
};

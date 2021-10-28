import { CloudUpload, Error } from '@mui/icons-material';
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '..';

interface Props {
  onChange: (file: File | undefined) => void;
  accept?: string;
  className?: string;
  errorMessage?: string;
}

const FileUpload = ({ onChange, accept, className, errorMessage }: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onClickUploadButton = useCallback(() => {
    fileInputRef?.current?.click();
  }, []);

  return (
    <Container className={className}>
      <UploadButton variant="outline" onClick={onClickUploadButton}>
        <CloudUpload />
        {selectedFile ? selectedFile.name : 'Choose a file'}
      </UploadButton>
      {errorMessage && (
        <ErrorMessage>
          <Error />
          {errorMessage}
        </ErrorMessage>
      )}
      {!errorMessage && selectedFile && (
        <FileSizeText>{`${Math.floor(
          selectedFile.size / 1000,
        )} KB`}</FileSizeText>
      )}
      <FileInput
        accept={accept}
        onChange={(e) => {
          const file = e.target.files?.[0];
          setSelectedFile(file);
          onChange(file);
        }}
        ref={fileInputRef}
        type="file"
      />
    </Container>
  );
};

const Container = styled('div')`
  max-width: 280px;
`;

const FileSizeText = styled('p')`
  margin: 0;
  font-size: 12px;
  margin-top: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
`;
const ErrorMessage = styled(FileSizeText)`
  color: var(--color-danger01);
  > svg {
    font-size: 16px;
  }
`;

const UploadButton = styled(Button)`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  gap: 5px;
  border: solid 1px var(--color-desaturated400);
  font-weight: normal;
  &:hover {
    font-weight: 500;
  }
  > svg {
    font-size: 20px;
  }
`;

const FileInput = styled('input')`
  display: none;
`;

export { FileUpload };

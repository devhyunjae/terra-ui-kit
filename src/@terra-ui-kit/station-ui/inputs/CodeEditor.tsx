import React, { ReactNode } from 'react';
import styled from 'styled-components';
import AceEditor, { IAceEditorProps } from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import { InputLabel } from './InputLabel';
import { baseInputStyle, errorInputStyle } from './styles';

interface Props {
  onChange: (value: string) => void;
  label?: ReactNode;
  error?: boolean;
}

const CodeEditor = ({ onChange, label, error }: Props) => {
  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledEditor
        error={error}
        mode="json"
        theme="github"
        onChange={onChange}
        name="code-editor"
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={false}
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="92px"
        onLoad={(editor) => {
          editor.renderer.setPadding(15);
          editor.renderer.setScrollMargin(15, 15, 15, 15);
        }}
      />
    </>
  );
};

const StyledEditor = styled(AceEditor)<IAceEditorProps & { error?: boolean }>`
  &.ace_editor {
    ${baseInputStyle}
    ${({ error = false }) => error && errorInputStyle}
  }
`;

export { CodeEditor };

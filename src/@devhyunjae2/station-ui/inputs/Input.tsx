import {
  UnstyledInput,
  UnstyledInputProps,
} from '@devhyunjae2/base-components';
import { fixHMR } from 'fix-hmr';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { InputLabel } from './InputLabel';
import { baseInputStyle, errorInputStyle } from './styles';

export interface InputProps extends UnstyledInputProps {
  fullWidth?: boolean;
  error?: boolean;
  className?: string;
  label?: string | ReactNode;
  errorMessage?: string;
  addonBefore?: string | ReactNode;
  addonAfter?: string | ReactNode;
}

function InputBase({
  label,
  errorMessage,
  fullWidth,
  addonBefore,
  addonAfter,
  ...restProps
}: InputProps) {
  return (
    <div>
      {label && <InputLabel>{label}</InputLabel>}
      <InputContainer>
        {addonBefore && (
          <LeftAddon>
            <div>{addonBefore}</div>
          </LeftAddon>
        )}
        <UnstyledInput {...restProps} />
        {addonAfter && (
          <RightAddon>
            <div>{addonAfter}</div>
          </RightAddon>
        )}
      </InputContainer>
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  );
}

const AddonContainer = styled('div')`
  width: 70px;
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 0px 8px;
  /* > div {
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  } */
`;

const LeftAddon = styled(AddonContainer)`
  border-right: solid 1px var(--color-desaturated400);
`;
const RightAddon = styled(AddonContainer)`
  border-left: solid 1px var(--color-desaturated400);
  right: 0;
`;

const InputContainer = styled('div')`
  display: flex;
  position: relative;
`;

const _Input = styled(InputBase)`
  font-size: 14px;
  outline: none;
  padding: 12px;
  ${baseInputStyle}
  ${({ error = false }) => error && errorInputStyle}
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'auto')};
  padding-right: ${({ addonAfter = null }) => (addonAfter ? '82px' : '12px')};
  ${({ addonBefore = null }) =>
    addonBefore &&
    css`
      padding-left: 82px;
    `};
`;

export const Input = fixHMR(_Input);

const InputErrorMessage = styled('p')`
  margin: 3px 0 0 0;
  font-size: 12px;
  color: var(--color-danger01);
`;

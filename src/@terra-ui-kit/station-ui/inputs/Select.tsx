import {
  UnstyledSelect,
  UnstyledSelectProps,
} from '@terra-ui-kit/base-components';
import { fixHMR } from 'fix-hmr';
import React from 'react';
import styled from 'styled-components';

export interface SelectProps extends UnstyledSelectProps {
  className?: string;
}

function SelectBase(props: SelectProps) {
  return <UnstyledSelect {...props} />;
}

const _Select = styled(SelectBase)``;

export const Select = fixHMR(_Select);

import {
  UnstyledPageHeader,
  UnstyledPageHeaderProps,
} from '@terra-ui-kit/base-components';
import { fixHMR } from 'fix-hmr';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface PageHeaderProps extends UnstyledPageHeaderProps {
  title: string;
  extra?: ReactNode;
}

function PageHeaderBase(props: PageHeaderProps) {
  return (
    <UnstyledPageHeader {...props}>
      <h2>{props.title}</h2>
      {props.extra && <section>{props.extra}</section>}
    </UnstyledPageHeader>
  );
}

const _PageHeader = styled(PageHeaderBase)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
  > h2 {
    margin: 0;
    font-size: 36px;
    font-weight: 500;
    color: var(--color-primary400);
  }
  > section {
    display: flex;
    gap: 12px;
  }
`;

export const PageHeader = fixHMR(_PageHeader);

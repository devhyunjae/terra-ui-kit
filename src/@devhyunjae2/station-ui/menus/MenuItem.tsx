import {
  UnstyledMenuItem,
  UnstyledMenuItemProps,
} from '@devhyunjae2/base-components';
import { fixHMR } from 'fix-hmr';
import React from 'react';
import styled, { css } from 'styled-components';

export interface MenuItemProps extends UnstyledMenuItemProps {
  selected?: boolean;
}

function MenuItemBase(props: MenuItemProps) {
  return <UnstyledMenuItem {...props} />;
}

const _MenuItem = styled(MenuItemBase)`
  cursor: pointer;
  padding: 10px;
  opacity: 0.75;
  color: var(--color-gray100);
  &:hover {
    opacity: 1;
  }
  ${({ selected }) =>
    selected
      ? css`
          opacity: 1;
          font-weight: 500;
        `
      : null}
`;

export const MenuItem = fixHMR(_MenuItem);

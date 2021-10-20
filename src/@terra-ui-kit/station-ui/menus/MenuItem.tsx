import {
  UnstyledMenuItem,
  UnstyledMenuItemProps,
} from '@terra-ui-kit/base-components';
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
  &:hover {
    background-color: pink;
  }
  ${({ selected }) =>
    selected
      ? css`
          font-weight: 700;
        `
      : null}
`;

export const MenuItem = fixHMR(_MenuItem);

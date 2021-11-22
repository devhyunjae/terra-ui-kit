import styled, { css } from 'styled-components';

export interface MenuItemProps {
  selected?: boolean;
}

const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  gap: 10px;
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

export { MenuItem };

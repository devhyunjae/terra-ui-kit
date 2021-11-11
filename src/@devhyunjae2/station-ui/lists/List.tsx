import styled, { css } from 'styled-components';

type Size = 'small' | 'medium' | 'large';

const listItemStyles = {
  small: css`
    padding: 12px 20px;
  `,
  medium: css`
    padding: 16px 20px;
  `,
  large: css`
    padding: 20px;
  `,
};

const List = styled('div')<{ size?: Size }>`
  width: 100%;
  border-radius: 8px;
  border: solid 1px var(--color-desaturated300);
  > div {
    display: flex;
    align-items: center;
    ${({ size = 'medium' }) => listItemStyles[size]}
  }
  > div:last-child {
    border-bottom: none;
  }
`;

const ListItem = styled('div')`
  border-bottom: solid 1px var(--color-desaturated300);
`;

export { List, ListItem };

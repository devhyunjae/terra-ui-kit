import { css } from 'styled-components';

const baseInputStyle = css`
  border-radius: 8px;
  border: solid 1px var(--color-desaturated400);
  color: var(--color-primary400);
  caret-color: var(--color-primary100);
  ::placeholder {
    opacity: 0.5;
  }
  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    border: solid 1px var(--color-primary100);
  }
  &:read-only,
  &:disabled {
    background-color: var(--color-desaturated300);
    border: solid 1px var(--color-desaturated400);
    cursor: not-allowed;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

const errorInputStyle = css`
  border: solid 1px var(--color-danger01) !important;
`;

export { baseInputStyle, errorInputStyle };

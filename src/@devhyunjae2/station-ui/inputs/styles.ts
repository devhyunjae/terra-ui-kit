import { css } from 'styled-components';

const inputEffectStyle = css`
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

const baseInputStyle = css`
  line-height: 1.5;
  font-family: inherit;
  border-radius: 8px;
  border: solid 1px var(--color-desaturated400);
  color: var(--color-primary400);
  caret-color: var(--color-primary100);
  ::placeholder {
    opacity: 0.5;
  }
  ${inputEffectStyle}
`;

const errorInputStyle = css`
  border: solid 1px var(--color-danger01) !important;
`;

export { baseInputStyle, errorInputStyle, inputEffectStyle };

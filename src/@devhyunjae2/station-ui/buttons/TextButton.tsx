import styled, { css } from 'styled-components';
import { BaseProps } from '../types/BaseProps';

interface TextButtonProps extends BaseProps {
  onClick?: () => void;
  color?: 'primary100' | 'primary300';
  hoverEffect?: boolean;
}

const TextButton = styled('span')<TextButtonProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  color: ${({ color = 'primary300' }) =>
    color === 'primary100'
      ? 'var(--color-primary100)'
      : 'var(--color-primary300)'};
  ${({ hoverEffect }) =>
    hoverEffect &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}
`;

export { TextButton };

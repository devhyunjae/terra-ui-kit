import React, { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Size = 'large' | 'medium' | 'small';

interface Props
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {}
interface _Props extends Omit<Props, 'size'> {}

interface SelectProps extends Omit<_Props, 'ref'> {
  size?: Size;
  className?: string;
}

const Select = ({ size, ...props }: SelectProps): React.ReactElement => {
  return (
    <Container>
      <div>
        <StyledSelect selectSize={size} {...props} />
        <ArrowDropDownIcon />
      </div>
    </Container>
  );
};

const Container = styled('div')`
  > div {
    position: relative;
    display: inline;
    > svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      right: 9px;
      font-size: 18px;
    }
  }
`;

const selectStyles = {
  large: css`
    width: 280px;
    padding: 12px 30px 12px 12px;
    font-size: 14px;
  `,
  medium: css`
    width: 84px;
    padding: 6px 30px 6px 8px;
    font-size: 14px;
    border-radius: 4px;
  `,
  small: css`
    width: 71px;
    padding: 4px 30px 4px 6px;
    font-size: 12px;
    border-radius: 4px;
  `,
};

const StyledSelect = styled('select')<{ selectSize?: Size }>`
  width: 280px;
  appearance: none;
  background: transparent;
  outline: 0;
  cursor: pointer;
  padding: 12px 30px 12px 12px;
  outline: 0;
  border-radius: 8px;
  border: solid 1px var(--color-desaturated400);
  color: var(--color-primary400);
  line-height: 1.5;
  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    border: solid 1px var(--color-primary100);
  }
  ${({ selectSize = 'large' }) => selectStyles[selectSize]}
`;

export { Select };

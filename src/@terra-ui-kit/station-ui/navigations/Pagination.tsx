import { DoubleArrow, ChevronLeft, ChevronRight } from '@mui/icons-material';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  totalPages: number;
  defaultCurrentPage?: number;
  onChange?: (current: number) => void;
  className?: string;
}

const Pagination = ({
  defaultCurrentPage,
  onChange,
  totalPages,
  className,
}: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(
    defaultCurrentPage || 1,
  );
  return (
    <Container className={className}>
      <IconButton
        disabled={currentPage < 2}
        onClick={() => {
          setCurrentPage(1);
          if (onChange) {
            onChange(1);
          }
        }}
      >
        <LeftDoubleArrow />
      </IconButton>
      <IconButton
        disabled={currentPage < 2}
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            if (onChange) {
              onChange(currentPage - 1);
            }
          }
        }}
      >
        <ChevronLeft />
      </IconButton>
      <IndexBox>{`${currentPage} of ${totalPages}`}</IndexBox>
      <IconButton
        disabled={currentPage >= totalPages}
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            if (onChange) {
              onChange(currentPage + 1);
            }
          }
        }}
      >
        <ChevronRight />
      </IconButton>
      <IconButton
        disabled={currentPage >= totalPages}
        onClick={() => {
          setCurrentPage(totalPages);
          if (onChange) {
            onChange(totalPages);
          }
        }}
      >
        <DoubleArrow />
      </IconButton>
    </Container>
  );
};

const LeftDoubleArrow = styled(DoubleArrow)`
  transform: rotate(180deg);
`;

const Container = styled('div')`
  display: inline-flex;
  align-items: stretch;
  justify-content: center;
  border-radius: 2px;
  border: solid 1px var(--color-desaturated400);
`;

const IconButton = styled('button')<{ disabled?: boolean }>`
  border: 0;
  outline: 0;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 13px;
  ${({ disabled = false }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
  &:first-child {
    border-right: solid 1px var(--color-desaturated400);
  }
  &:last-child {
    border-left: solid 1px var(--color-desaturated400);
  }
  &:hover {
    background-color: var(--color-desaturated200);
  }
  > svg {
    font-size: 14px;
    color: var(--color-primary400);
  }
`;

const IndexBox = styled('div')`
  min-width: 61px;
  font-size: 12px;
  padding: 11px 14px 9px 13px;
  background-color: var(--color-primary300);
  color: var(--color-white);
  display: flex;
  align-items: center;
`;

export { Pagination };

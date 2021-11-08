import { DoubleArrow, ChevronLeft, ChevronRight } from '@mui/icons-material';
import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  totalPages: number;
  defaultCurrentPage?: number;
  onChange?: (current: number) => void;
  className?: string;
}

interface ButtonElements {
  disabled: (currentPage: number, totalPages?: number) => boolean;
  onClick: (
    setCurrentPage: Function,
    targetPage: number,
    onChange?: (current: number) => void,
    totalPages?: number,
  ) => () => void;
  icon: ReactNode;
}

const LeftDoubleArrow = styled(DoubleArrow)`
  transform: rotate(180deg);
`;

const backButtons: ButtonElements[] = [
  {
    disabled: (currentPage: number) => currentPage < 2,
    onClick:
      (
        setCurrentPage: Function,
        targetPage: number,
        onChange?: (current: number) => void,
      ) =>
      () => {
        setCurrentPage(1);
        if (onChange) {
          onChange(1);
        }
      },
    icon: <LeftDoubleArrow />,
  },
  {
    disabled: (currentPage: number) => currentPage < 2,
    onClick:
      (
        setCurrentPage: Function,
        targetPage: number,
        onChange?: (current: number) => void,
      ) =>
      () => {
        if (targetPage > 1) {
          setCurrentPage(targetPage - 1);
          if (onChange) {
            onChange(targetPage - 1);
          }
        }
      },
    icon: <ChevronLeft />,
  },
];

const nextButtons: ButtonElements[] = [
  {
    disabled: (currentPage: number, totalPages: number = 1) =>
      currentPage >= totalPages,
    onClick:
      (
        setCurrentPage: Function,
        targetPage: number,
        onChange?: (current: number) => void,
        totalPages: number = 1,
      ) =>
      () => {
        if (targetPage < totalPages) {
          setCurrentPage(targetPage + 1);
          if (onChange) {
            onChange(targetPage + 1);
          }
        }
      },
    icon: <ChevronRight />,
  },
  {
    disabled: (currentPage: number, totalPages: number = 1) =>
      currentPage >= totalPages,
    onClick:
      (
        setCurrentPage: Function,
        targetPage: number,
        onChange?: (current: number) => void,
        totalPages: number = 1,
      ) =>
      () => {
        setCurrentPage(totalPages);
        if (onChange) {
          onChange(totalPages);
        }
      },
    icon: <DoubleArrow />,
  },
];

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
      {backButtons.map((backButton: ButtonElements, i: number) => {
        return (
          <IconButton
            key={`back-button-${i}`}
            disabled={backButton.disabled(currentPage)}
            onClick={backButton.onClick(setCurrentPage, currentPage, onChange)}
          >
            {backButton.icon}
          </IconButton>
        );
      })}
      <IndexBox>{`${currentPage} of ${totalPages}`}</IndexBox>
      {nextButtons.map((nextButton: ButtonElements, i: number) => {
        return (
          <IconButton
            key={`next-button-${i}`}
            disabled={nextButton.disabled(currentPage, totalPages)}
            onClick={nextButton.onClick(
              setCurrentPage,
              currentPage,
              onChange,
              totalPages,
            )}
          >
            {nextButton.icon}
          </IconButton>
        );
      })}
    </Container>
  );
};

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

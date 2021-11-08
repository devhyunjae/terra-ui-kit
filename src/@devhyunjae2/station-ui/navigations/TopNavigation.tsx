import { ChevronLeft } from '@mui/icons-material';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  onClickBack?: () => void;
  extra?: ReactNode;
  title: string;
  className?: string;
}

const TopNavigation = ({ title, onClickBack, extra, className }: Props) => {
  return (
    <Container className={className}>
      <NavigatorSection>
        {onClickBack && (
          <>
            <button onClick={onClickBack}>
              <ChevronLeft />
            </button>
            {extra}
          </>
        )}
      </NavigatorSection>
      <h3>{title}</h3>
    </Container>
  );
};

const Container = styled('div')`
  color: #5493f7;
  width: 100%;
  min-height: 116px;
  padding: 18px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: var(--color-extension-navy);
  > h3 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }
`;

const NavigatorSection = styled('section')`
  min-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    cursor: pointer;
    margin: 0;
    outline: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    > svg {
      margin-left: -7px;
      font-size: 32px;
      color: #5493f7;
    }
  }
`;

export { TopNavigation };

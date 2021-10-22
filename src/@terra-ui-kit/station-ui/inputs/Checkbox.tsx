import React from 'react';
import styled from 'styled-components';

interface Props {
  checked: boolean;
  onClick: () => void;
  label?: string;
  className?: string;
}

const Checkbox = ({ checked, onClick, label, className }: Props) => {
  return (
    <Container onClick={onClick} className={className}>
      <CheckboxContainer>{checked && <Checked />}</CheckboxContainer>
      {label && <Label>{label}</Label>}
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  cursor: pointer;
  width: fit-content;
`;

const CheckboxContainer = styled('div')`
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: solid 1px var(--color-desaturated400);
`;

const Checked = styled('div')`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background-color: var(--color-primary400);
`;

const Label = styled('p')`
  margin: 0;
  margin-left: 8px;
  font-size: 12px;
  color: var(--color-primary400);
`;

export { Checkbox };

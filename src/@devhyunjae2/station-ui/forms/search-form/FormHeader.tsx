import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  extra?: ReactNode;
}

const FormHeader = ({ label, extra }: Props) => {
  return (
    <Container>
      <h6>{label}</h6>
      <div>{extra}</div>
    </Container>
  );
};

const Container = styled('div')`
  padding: 16px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  > h6 {
    margin: 0;
  }
`;

export { FormHeader };

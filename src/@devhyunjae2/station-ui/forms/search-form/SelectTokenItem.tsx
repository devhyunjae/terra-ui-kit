import React from 'react';
import styled from 'styled-components';
import { DetailAsset } from './types';

const SelectTokenItem = ({ value, symbol, icon, balance }: DetailAsset) => {
  return (
    <Container>
      <span>
        <img src={icon} alt="" />
        <AssetInfo>
          <div>{symbol}</div>
          <div>{value}</div>
        </AssetInfo>
      </span>
      <div>{parseFloat(balance).toLocaleString()}</div>
    </Container>
  );
};

const Container = styled('div')`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    display: flex;
    gap: 10px;
    align-items: center;
    > img {
      width: 22px;
      height: 22px;
    }
  }
  > div {
    font-size: 12px;
  }
`;

const AssetInfo = styled('div')`
  div:first-child {
    font-size: 16px;
    font-weight: 500;
  }
  div:last-child {
    font-size: 12px;
    color: var(--color-desaturated800);
  }
`;

export { SelectTokenItem };

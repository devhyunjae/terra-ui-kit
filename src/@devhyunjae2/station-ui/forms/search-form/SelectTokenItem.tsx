import React from 'react';
import styled, { css } from 'styled-components';
import { useSearchFormContext } from './context';
import { Asset } from './types';

const SelectTokenItem = ({ value, symbol, icon, balance, group }: Asset) => {
  const { selectedAsset, onChangeSelectedAsset, setOpenAddon } =
    useSearchFormContext();
  return (
    <Container
      selected={selectedAsset.value === value}
      onClick={() => {
        onChangeSelectedAsset({
          value,
          symbol,
          icon,
          balance,
          group,
        });
        setOpenAddon(false);
      }}
    >
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

const Container = styled('div')<{ selected: boolean }>`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: var(--color-desaturated200);
  }
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
  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--color-desaturated200);
    `}
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

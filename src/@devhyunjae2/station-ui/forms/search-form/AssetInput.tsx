import { ArrowDropDown } from '@mui/icons-material';
import React, {
  ChangeEventHandler,
  Children,
  ReactElement,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import groupBy from 'lodash/groupBy';

import { useSearchFormContext } from './context';
import { SearchInput } from './SearchInput';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  addon: ReactElement;
}

const AssetInput = ({ value, onChange, addon }: Props) => {
  const { selectedAsset, openAddon, setOpenAddon } = useSearchFormContext();
  const [searchValue, setSearchValue] = useState('');

  const filteredAssetList = (
    Children.toArray(addon.props.children) as ReactElement[]
  ).filter((child: ReactElement) => {
    if (child.props) {
      const { symbol, value: childValue } = child.props;
      const lowerCasedSearchValue = searchValue.toLowerCase();
      return (
        symbol.toLowerCase().includes(lowerCasedSearchValue) ||
        childValue.toLowerCase().includes(lowerCasedSearchValue)
      );
    }
    return false;
  });

  const groupedAssetList = groupBy(filteredAssetList, (child: ReactElement) => {
    return child.props.group;
  });

  return (
    <>
      <Container>
        <AssetInfo onClick={() => setOpenAddon(!openAddon)}>
          <img src={selectedAsset?.icon} alt="" />
          <span>{selectedAsset?.symbol}</span>
          <ArrowDropDown />
        </AssetInfo>
        <StyledInput
          type="number"
          value={value}
          onChange={onChange}
          placeholder="0"
        />
      </Container>
      <AddonContainer openAddon={openAddon}>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <AssetListContainer>
          {Object.keys(groupedAssetList).map((groupName: string) => {
            return (
              <>
                <GroupNameSection>{groupName}</GroupNameSection>
                {groupedAssetList[groupName]}
              </>
            );
          })}
        </AssetListContainer>
      </AddonContainer>
    </>
  );
};

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 20px 20px;
`;

const AssetInfo = styled('span')`
  display: flex;
  align-items: center;
  cursor: pointer;
  > img {
    width: 22px;
    height: 22px;
  }
  > span {
    font-size: 18px;
    font-weight: 500;
    margin-left: 8px;
    margin-right: 16px;
  }
  > svg {
    font-size: 18px;
  }
`;

const StyledInput = styled('input')`
  text-align: right;
  min-width: 0;
  padding: 0;
  border: none;
  outline: none;
  color: var(--color-primary400);
  caret-color: var(--color-primary100);
  background-color: transparent;
  font-size: 18px;
  line-height: 1.5;
  font-family: inherit;
  ::placeholder {
    opacity: 0.5;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type='number'] {
    -moz-appearance: textfield;
  }
`;

const AddonContainer = styled('div')<{ openAddon: boolean }>`
  display: none;
  ${({ openAddon }) =>
    openAddon &&
    css`
      display: block;
    `}
`;

const GroupNameSection = styled('section')`
  font-size: 12px;
  font-weight: 500;
  padding: 8px 20px;
  border-bottom: 1px solid var(--color-desaturated200);
`;

const AssetListContainer = styled('div')`
  height: 250px;
  overflow-y: scroll;
`;

export { AssetInput };

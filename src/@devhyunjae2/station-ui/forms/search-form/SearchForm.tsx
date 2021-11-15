import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types/BaseProps';
import { SearchFormContext } from './context';
import { FormHeader } from './FormHeader';
import { Asset } from './types';

interface Props extends BaseProps {
  label: string;
  extra?: ReactNode;
  defaultSelectedAsset: Asset;
  onChangeSelectedAsset: (asset: Asset) => void;
}

const SearchForm = ({
  label,
  extra,
  children,
  defaultSelectedAsset,
  onChangeSelectedAsset,
  ...restProps
}: Props) => {
  const [selectedAsset, setSelectedAsset] =
    useState<Asset>(defaultSelectedAsset);
  const [openAddon, setOpenAddon] = useState(false);

  return (
    <SearchFormContext.Provider
      value={{
        selectedAsset,
        onChangeSelectedAsset: (asset: Asset) => {
          setSelectedAsset(asset);
          onChangeSelectedAsset(asset);
        },
        openAddon,
        setOpenAddon,
      }}
    >
      <Container {...restProps}>
        <FormHeader label={label} extra={extra} />
        {children}
      </Container>
    </SearchFormContext.Provider>
  );
};

const Container = styled('div')`
  border-radius: 8px;
  border: solid 1px var(--color-desaturated400);
`;

export { SearchForm };

import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types/BaseProps';
import { SearchFormContext } from './context';
import { FormHeader } from './FormHeader';
import { Asset } from './types';

interface Props extends BaseProps {
  label: string;
  extra?: ReactNode;
}

const SearchForm = ({ label, extra, children, ...restProps }: Props) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset>({
    symbol: 'UST',
    value: 'Terra USD',
    icon: 'https://whitelist.mirror.finance/images/UST.png',
  });

  return (
    <SearchFormContext.Provider value={{ selectedAsset, setSelectedAsset }}>
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

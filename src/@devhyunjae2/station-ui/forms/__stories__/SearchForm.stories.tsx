import React, { useState } from 'react';
import { SearchForm } from '../search-form/SearchForm';
import { AssetInput } from '../search-form/AssetInput';
import { SelectTokenItem } from '../search-form/SelectTokenItem';

export default {
  title: 'station-ui/SearchForm',
};

export const Basic = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <SearchForm label="FROM" extra="Balance here">
        <AssetInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          addon={
            <>
              <SelectTokenItem
                symbol="UST"
                value="Terra USD"
                icon="https://whitelist.mirror.finance/images/UST.png"
                balance="111111111"
                group="Terra native"
              />
              <SelectTokenItem
                value="token 2"
                balance="222222222222"
                symbol="222222222"
                icon="https://whitelist.mirror.finance/images/AAPL.png"
                group="CW20 Tokens"
              />
            </>
          }
        />
      </SearchForm>
    </>
  );
};

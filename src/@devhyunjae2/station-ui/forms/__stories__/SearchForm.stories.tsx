import React, { useState } from 'react';
import { SearchForm } from '../search-form/SearchForm';
import { AssetInput } from '../search-form/AssetInput';
import { SelectToken } from '../search-form/SelectToken';
import { SelectTokenItem } from '../search-form/SelectTokenItem';
import { Asset } from '../search-form/types';

export default {
  title: 'station-ui/SearchForm',
};

export const Basic = () => {
  const [value, setValue] = useState('');
  const [asset, setAsset] = useState<Asset | undefined>();

  return (
    <>
      <SearchForm
        label="FROM"
        extra={'put extra here'}
        defaultSelectedAsset={{
          symbol: 'UST',
          value: 'Terra USD',
          icon: 'https://whitelist.mirror.finance/images/UST.png',
          balance: '111111111',
          group: 'Terra native',
        }}
        onChangeSelectedAsset={(selectedAsset) => setAsset(selectedAsset)}
      >
        <AssetInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          addon={
            <SelectToken>
              <SelectTokenItem
                symbol="UST"
                value="Terra USD"
                icon="https://whitelist.mirror.finance/images/UST.png"
                balance="111111111"
                group="Terra native"
              />
              <SelectTokenItem
                symbol="MIR"
                value="Mirror"
                icon="https://whitelist.mirror.finance/images/MIR.png"
                balance="111111111"
                group="CW20 Tokens"
              />
              <SelectTokenItem
                value="token 2"
                balance="222222222222"
                symbol="222222222"
                icon="https://whitelist.mirror.finance/images/AAPL.png"
                group="CW20 Tokens"
              />
              <SelectTokenItem
                symbol="UST222"
                value="Terra USD222"
                icon="https://whitelist.mirror.finance/images/UST.png"
                balance="11111111112312312"
                group="Terra native"
              />
              <SelectTokenItem
                symbol="MIR222"
                value="Mirror222"
                icon="https://whitelist.mirror.finance/images/MIR.png"
                balance="33333444123"
                group="CW20 Tokens"
              />
              <SelectTokenItem
                value="token 212313"
                balance="1231231334"
                symbol="1231321"
                icon="https://whitelist.mirror.finance/images/AAPL.png"
                group="CW20 Tokens"
              />
            </SelectToken>
          }
        />
      </SearchForm>
      <div style={{ margin: 20 }}>
        Your selected asset: {JSON.stringify(asset)}
      </div>
    </>
  );
};

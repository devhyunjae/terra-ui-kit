import { createContext, useContext } from 'react';
import { Asset } from './types';

interface Context {
  selectedAsset: Asset;
  onChangeSelectedAsset: (asset: Asset) => void;
  openAddon: boolean;
  setOpenAddon: Function;
}

// @ts-ignore
const SearchFormContext = createContext<Context>();

const useSearchFormContext = () => {
  const { selectedAsset, onChangeSelectedAsset, openAddon, setOpenAddon } =
    useContext(SearchFormContext);

  return {
    selectedAsset,
    onChangeSelectedAsset,
    openAddon,
    setOpenAddon,
  };
};

export { SearchFormContext, useSearchFormContext };

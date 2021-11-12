import { createContext, useContext } from 'react';
import { Asset } from './types';

interface Context {
  selectedAsset?: Asset;
  setSelectedAsset?: React.Dispatch<React.SetStateAction<Asset>>;
}

const SearchFormContext = createContext<Context>({});

const useSearchFormContext = () => {
  return useContext(SearchFormContext);
};

export { SearchFormContext, useSearchFormContext };

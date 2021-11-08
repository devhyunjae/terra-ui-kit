import { createContext, useContext } from 'react';

export type OptionType = string | number;

const SelectContext = createContext<{
  selectedOption: OptionType;
  changeSelectedOption: (option: OptionType) => void;
}>({
  selectedOption: '',
  changeSelectedOption: () => {},
});

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Error in creating the context');
  }
  return context;
};

export { useSelectContext, SelectContext };

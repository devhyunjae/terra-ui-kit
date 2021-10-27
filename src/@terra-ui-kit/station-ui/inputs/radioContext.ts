import { createContext, useContext } from 'react';

export type RadioType = string | number;

const RadioContext = createContext<{
  selectedRadio: RadioType;
  onChange: (selectedValue: RadioType) => void;
}>({
  selectedRadio: '',
  onChange: () => {},
});

const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error('Error in creating the context');
  }
  return context;
};

export { RadioContext, useRadioContext };

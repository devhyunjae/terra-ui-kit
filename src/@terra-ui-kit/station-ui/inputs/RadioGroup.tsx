import React, { ReactNode, useState } from 'react';
import { RadioContext, RadioType } from './radioContext';

interface Props {
  value: RadioType;
  onChange: (selectedValue: RadioType) => void;
  children: ReactNode;
}

const RadioGroup = ({ value, onChange, children }: Props) => {
  const [selectedRadio, setSelectedRadio] = useState<RadioType>(value || '');
  return (
    <RadioContext.Provider
      value={{
        selectedRadio,
        onChange: (selectedValue: RadioType) => {
          setSelectedRadio(selectedValue);
          onChange(selectedValue);
        },
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};

export { RadioGroup };

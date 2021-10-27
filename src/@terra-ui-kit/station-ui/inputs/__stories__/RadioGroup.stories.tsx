import React, { useState } from 'react';
import { Card } from '../..';
import { Radio } from '../Radio';
import { RadioGroup } from '../RadioGroup';

export default {
  title: 'station-ui/RadioGroup',
};

const menus = [
  {
    label: 'Chicken',
    value: 'chicken',
  },
  {
    label: 'Sushi',
    value: 'sushi',
  },
  {
    label: 'Curry',
    value: 'curry',
  },
];

export const Basic = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>(
    'chicken',
  );
  const [anotherValue, setAnotherValue] = useState<string | number>('chicken');
  return (
    <>
      <h2>Select your dinner menu</h2>
      <RadioGroup
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
      >
        {menus.map((menu, i) => {
          return (
            <Card style={{ marginBottom: 20 }} key={`menu-${i}`}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {menu.label}
                <Radio value={menu.value} />
              </div>
            </Card>
          );
        })}
      </RadioGroup>
      {`you have selected: ${selectedValue}`}
      <h2>Blue color radios</h2>
      <RadioGroup
        value={anotherValue}
        onChange={(value) => setAnotherValue(value)}
      >
        {menus.map((menu, i) => {
          return (
            <Card
              style={{
                marginBottom: 20,
                backgroundColor: '#2043b5',
                color: 'white',
              }}
              key={`another-menu-${i}`}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {menu.label}
                <Radio value={menu.value} color="blue" />
              </div>
            </Card>
          );
        })}
      </RadioGroup>
      {`you have selected: ${anotherValue}`}
    </>
  );
};

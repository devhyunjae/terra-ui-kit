import React, { useState } from 'react';
import { MenuItem } from '../MenuItem';

export default {
  title: 'station-ui/MenuItem',
};

export const Basic = () => {
  const [selected, setSelected] = useState(0);
  const menus = [
    {
      text: 'Wallet',
    },
    {
      text: 'History',
    },
    {
      text: 'Staking',
    },
    {
      text: 'Goverance',
    },
    {
      text: 'Discover',
    },
  ];
  return (
    <div
      style={{
        backgroundColor: '#0045a7',
      }}
    >
      {menus.map((menu: any, i: number) => {
        return (
          <MenuItem
            key={`menu-${i.toString()}`}
            selected={selected === i}
            onClick={() => setSelected(i)}
          >
            {menu.text}
          </MenuItem>
        );
      })}
    </div>
  );
};

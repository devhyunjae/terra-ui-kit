import React, { useState } from 'react';
import { MenuItem } from '../MenuItem';
import { Icon } from '../../icons/Icon';

export default {
  title: 'station-ui/MenuItem',
};

export const Basic = () => {
  const [selected, setSelected] = useState(0);
  const menus = [
    {
      text: 'Wallet',
      icon: 'account_balance_wallet',
    },
    {
      text: 'History',
      icon: 'subject',
    },
    {
      text: 'Staking',
      icon: 'layers',
    },
    {
      text: 'Goverance',
      icon: 'account_balance_wallet',
    },
    {
      text: 'Discover',
      icon: 'account_balance_wallet',
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
            <Icon>{menu.icon}</Icon>
            {menu.text}
          </MenuItem>
        );
      })}
    </div>
  );
};

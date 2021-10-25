import { TooltipProps } from '@mui/material';
import MuiTooltip from '@mui/material/Tooltip';
import React from 'react';

const Tooltip = (props: TooltipProps) => {
  return (
    <MuiTooltip
      {...props}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            fontFamily: 'inherit',
            backgroundColor: 'var(--color-primary400)',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.5',
            letterSpacing: 'normal',
            minWidth: 76,
            maxWidth: 360,
          },
        },
        arrow: {
          sx: {
            color: 'var(--color-primary400)',
          },
        },
      }}
    />
  );
};

export { Tooltip };

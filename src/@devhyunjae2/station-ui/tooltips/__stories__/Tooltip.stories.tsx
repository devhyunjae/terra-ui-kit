import React from 'react';
import { Tooltip } from '../Tooltip';

export default {
  title: 'station-ui/Tooltip',
  parameters: {
    docs: {
      page: null,
    },
  },
};

export const Basic = () => {
  // This component is a wrapper of MuiTooltip
  // Check this document below
  // https://mui.com/components/tooltips/
  return (
    <>
      <Tooltip title="you will see tooltip">
        <span>hover tooltip</span>
      </Tooltip>
    </>
  );
};

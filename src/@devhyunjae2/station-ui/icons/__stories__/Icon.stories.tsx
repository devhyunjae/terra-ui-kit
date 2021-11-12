import React from 'react';
import { Icon } from '../Icon';

export default {
  title: 'station-ui/Icon',
};

export const Basic = () => {
  return (
    <>
      <h2>
        As a prerequisite, you must include one, such as the Material icon font
        in your project.
      </h2>
      <a
        href="https://google.github.io/material-design-icons/#icon-font-for-the-web"
        target="_blank"
        rel="noreferrer"
      >
        https://google.github.io/material-design-icons/#icon-font-for-the-web
      </a>
      <h2>How to use? Doc below</h2>
      <a
        href="https://mui.com/components/icons/#icon-font-icons"
        target="_blank"
        rel="noreferrer"
      >
        https://mui.com/components/icons/#icon-font-icons
      </a>
      <h2>Icons list</h2>
      <a
        href="https://mui.com/components/material-icons/"
        target="_blank"
        rel="noreferrer"
      >
        https://mui.com/components/material-icons/
      </a>
      <h2>Example</h2>
      <h4>Tips: convert the icon name to camel_case</h4>
      <Icon>add_a_photo</Icon>
      <Icon>all_inclusive</Icon>
      <Icon>add_circle</Icon>
    </>
  );
};

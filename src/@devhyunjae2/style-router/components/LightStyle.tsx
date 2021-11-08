import { createGlobalStyle } from 'styled-components';

const LightStyle = createGlobalStyle`
  * {
    --color-primary500: #0045a7;
    --color-primary400: #2043b5;
    --color-primary300: #0759e7;
    --color-primary200: #3082f4;
    --color-primary100: #459cf4;
    --color-desaturated800: #627bcb;
    --color-desaturated400: #cfd8ea;
    --color-desaturated300: #ebeff8;
    --color-desaturated200: #f3f5fd;
    --color-desaturated100: #f9faff;
    --color-success01: #1daa8e;
    --color-bg-success01: rgba(29, 170, 142, 0.1);
    --color-warning01: #fd9a02;
    --color-bg-warning01: rgba(253, 154, 2, 0.1);
    --color-danger01: #ff5561;
    --color-bg-danger01: rgba(255, 85, 97, 0.1);
    --color-gray100: #f3f3f3;
    --color-purple01: #7a6ff0;
    --color-white: #ffffff;
    --color-extension-navy: #0b132f;

    --color-gray08: #ffffff;
    --color-gray11: #e8e8e8;
    --color-gray14: #f5f5f5;
    --color-gray18: #ffffff;
    --color-gray22: #f0f0f0;
    --color-gray24: #eeeeee;
    --color-gray34: #cccccc;
    --color-white44: #685f75;
    --color-white52: #463f51;
    --color-white64: #332e3c;
    --color-white80: #272231;
    --color-white92: #0c0816;
    --color-white100: #000000;

    --text-color: skyblue;
  }
`;

export { LightStyle };

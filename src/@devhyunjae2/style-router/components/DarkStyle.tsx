import { createGlobalStyle } from 'styled-components';
import ResetCss from './ResetCss';
import { fontStyle } from './styles';

const DarkStyle = createGlobalStyle<{ resetCss?: boolean }>`
  ${fontStyle}
  * {
    --color-primary500: #212121;
    --color-primary400: #dbdbdb;
    --color-primary300: #459cf4;
    --color-primary200: #3082f4;
    --color-primary100: #459cf4;
    --color-desaturated800: #8d8d8d;
    --color-desaturated400: #4c4d4e;
    --color-desaturated300: #343536;
    --color-desaturated200: #212121;
    --color-desaturated100: #1c1c1c;
    --color-success01: #1daa8e;
    --color-bg-success01: rgba(29, 170, 142, 0.1);
    --color-warning01: #fd9a02;
    --color-bg-warning01: rgba(253, 154, 2, 0.1);
    --color-danger01: #ff5561;
    --color-bg-danger01: rgba(255, 85, 97, 0.1);
    --color-gray100: #f3f3f3;
    --color-purple01: #7a6ff0;
    --color-white: #252526;
    --color-extension-navy: #0b132f;

    --color-gray08: #0c0816;
    --color-gray11: #1a1525;
    --color-gray14: #272231;
    --color-gray18: #332e3c;
    --color-gray22: #413a4b;
    --color-gray24: #463f51;
    --color-gray34: #685f75;
    --color-white44: #939098;
    --color-white52: #a19fa6;
    --color-white64: #b9b7bc;
    --color-white80: #e9e9ea;
    --color-white92: #eeedee;
    --color-white100: #ffffff;

    --text-color: red;
    ${({ resetCss }) => resetCss && ResetCss}
  }
`;

export { DarkStyle };

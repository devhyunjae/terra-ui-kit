import { css } from 'styled-components';
import GothamNormal from '../fonts/Gotham-Book_Web.woff2';
import GothamMedium from '../fonts/Gotham-Medium_Web.woff2';
import GothamBold from '../fonts/Gotham-Bold_Web.woff2';

const fontStyle = css`
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamNormal});
    font-weight: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamMedium});
    font-weight: 500;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBold});
    font-weight: bold;
  }
`;

export { fontStyle };

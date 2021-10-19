import { Button } from '@terra-ui-kit/station-ui';
import { importColor, useStyle } from '@terra-ui-kit/style-router';
import { StyleProviders } from 'configurations/style';
import React from 'react';
import { render } from 'react-dom';

function App() {
  const { color, updateColor, breakpoint } = useStyle();

  return (
    <div>
      <h1>Hello World?</h1>
      <section>
        <ul>
          <li>color: {color}</li>
          <li>breakpoint: {breakpoint}</li>
        </ul>

        <footer>
          <Button
            onClick={() => updateColor(color === 'light' ? 'dark' : 'light')}
          >
            Change color
          </Button>
        </footer>
      </section>
    </div>
  );
}

// change <link href="/styles/colors/{color}.css" id="theme-color"/>
// before app start
importColor((color) => `/styles/colors/${color}.css`, 'dark', '#theme-color');

render(
  <StyleProviders>
    <App />
  </StyleProviders>,
  document.querySelector('#app'),
);

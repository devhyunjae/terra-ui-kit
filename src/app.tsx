import { Button } from '@terra-ui-kit/station-ui';
import { importColor, useStyle } from '@terra-ui-kit/style-router';
import { StyleProviders } from 'configurations/style';
import React from 'react';
import { render } from 'react-dom';

function App() {
  const { color, updateColor, breakpoint } = useStyle();

  return (
    <div>
      <h1>terra-ui-kit</h1>
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
        <h1>Buttons</h1>
        <div style={{
          display: 'flex',
          gap: 20,
          marginBottom: 20
        }}>
          <Button>default</Button>
          <Button variant='primary'>primary</Button>
          <Button variant='danger'>danger</Button>
          <Button variant='outline'>outline</Button>
        </div>
        <Button fullWidth>fullWidth</Button>
        <Button size='large'>large</Button>
        <Button>default size</Button>
        <Button size='medium'>medium</Button>
        <Button size='small'>outline</Button>
        <Button disabled>Disabled</Button>
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

# Terra UI Kit

## Quick Start

```sh
npm i --save @devhyunjae2/station-ui @devhyunjae2/style-router
```

```jsx
import { Button } from '@devhyunjae2/station-ui';
import { useStyle, ThemeProvider } from '@devhyunjae2/style-router';
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
      </section>
    </div>
  );
}

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.querySelector('#app'),
);

```

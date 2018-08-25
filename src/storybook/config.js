import 'reflect-metadata';

import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { setOptions } from '@storybook/addon-options';
import { injectGlobals } from '../app/components/obj.globals';
import { GridConfig } from '../app/components/obj.grid';

const req = require.context('../app/components', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

injectGlobals();

addDecorator(story => {
  return (
    <ThemeProvider theme={GridConfig}>
      <BrowserRouter>
        {story()}
      </BrowserRouter>
    </ThemeProvider>
  );
});

addDecorator(withKnobs);

setOptions({
  addonPanelInRight: true,
});

configure(loadStories, module);
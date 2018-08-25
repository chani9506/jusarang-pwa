import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '@app/modules/app';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobals } from '@app/components/obj.globals';
import { Token } from 'typedi';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { GridConfig } from '@app/components/obj.grid';

export const HistoryToken = new Token<History>();

ReactDOM.render(
  <ThemeProvider theme={GridConfig}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
injectGlobals();

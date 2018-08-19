import { injectGlobal } from 'styled-components';

export const injectGlobals = () => {
  return injectGlobal`
    * {
      box-sizing: border-box;
      }
    body {
      margin: 0;
    }
    a {
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0.05);
    }
  `;
};

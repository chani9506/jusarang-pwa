import { injectGlobal } from 'styled-components';
import { Background } from '@app/components/obj.constants';

export const injectGlobals = () => {
  return injectGlobal`
    * {
      box-sizing: border-box;
      }
    body {
      margin: 0;
      background-color: ${Background.Color};
    }
    a {
      color: black;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0.05);
    }
  `;
};

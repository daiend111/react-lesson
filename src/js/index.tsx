import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app'

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>
  , document.getElementById('root')
)

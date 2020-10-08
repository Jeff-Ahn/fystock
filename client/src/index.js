import React from 'react';
import ReactDOM from 'react-dom';
import { css, Global } from '@emotion/core';
import App from './App';
import * as serviceWorker from './serviceWorker';

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
  }

  div#root {
    position: relative;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global styles={globalStyle} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

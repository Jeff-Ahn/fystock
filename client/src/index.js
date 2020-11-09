import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { css, Global } from '@emotion/core';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FYSTOCK_BLACK } from './domain/constants';

import conditionsReducer from './store/reducers/conditions';

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    color: ${FYSTOCK_BLACK};
  }

  div#root {
    position: relative;
  }
`;

const rootReducer = combineReducers({
  conditions: conditionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Global styles={globalStyle} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import {factsReducer} from './store';

const store = createStore(factsReducer, applyMiddleware(thunk, customLogger));

function customLogger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.log("prev state", store.getState());
      console.log('ACTION: ', action)
      next(action);
      console.log("next state", store.getState());
      console.groupEnd();
    };
  };
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

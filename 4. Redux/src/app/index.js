import React from 'react';

// 1 step createStore
// step 8 applyMiddleware
import { createStore, applyMiddleware } from 'redux';
// 2 step
import RootReducer from './reducers';
// 3 step done after creating actions and reducers "Hooking up"
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// 4 step Import main app here
import App from './app';
// 7 Install react thunk to be able to have functions instead of actions
import thunkMiddleware from 'redux-thunk'

// 5 step Hook in HTML file
const rootElement = document.getElementById('app-root');



//3 step crate store
//9 step apply thunkMiddleware
let store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

// 6 step Hook up store with apllication by using Provider
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

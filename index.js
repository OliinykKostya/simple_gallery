/**
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/store/index'

const Root = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);

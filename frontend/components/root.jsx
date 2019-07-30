import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  )
}

export default Root;
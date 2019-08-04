import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import { login, signup } from './actions/session_actions'
import { openAmenitiesModal } from './actions/modal_actions'
import 'react-dates/initialize';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: { users: { [window.currentUser.id]: window.currentUser } },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // const nian = { fname: 'Nian', lname: 'Hu', email: 'nianhu96@gmail.com', password: 'hunter12' }
  // window.nian = nian;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.openAmenitiesModal = openAmenitiesModal;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
})
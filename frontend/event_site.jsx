import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { lookUpUser, logout} from './actions/session_actions';



document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUser: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.lookUpUser = lookUpUser;
  ReactDOM.render(<Root store={store}/>, root);
});

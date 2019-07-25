import React from 'react';
import ReactDOM from 'react-dom';
import 'material-design-icons';
import './index.css';
import App from './app/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';



ReactDOM.render(
  <Provider
    store={createStore(reducers)}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
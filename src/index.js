import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './context/TryProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

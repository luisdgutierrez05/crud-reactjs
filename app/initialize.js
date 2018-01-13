import ReactDOM from 'react-dom';
import React from 'react';
import App from 'containers/App';
import { BrowserRouter } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    , document.querySelector('#root'));
});

import ReactDOM from 'react-dom';
import React from 'react';
import MainContainer from 'containers/MainContainer';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<MainContainer />, document.querySelector('#root'));
});

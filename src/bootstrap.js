import React from 'react';
import ReactDOM from 'react-dom';

// App Components //
// Styles
import './style/main.scss';
// Data
// Components
import App from './components/app';

function main() {
  ReactDOM.render(
    <App/>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from './containers/DevTools';

const injectDevTools = ()=> {
  return (
      <DevTools />
    );
};

ReactDOM.render(
    <div>
     <h1> hello </h1>
     {injectDevTools()}
    </div>,
  document.getElementById('root')
);

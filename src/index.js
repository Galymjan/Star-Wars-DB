/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

//fetch('https://swapi.dev/api/people/1/').then((res)=>{console.log('got response', res.status)});
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

ReactDOM.render(<App/>, document.getElementById('root'));


//fetch('https://swapi.dev/api/people/1/').then((res)=>{return res.json();}).then((body)=>{console.log(body)});
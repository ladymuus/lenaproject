import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts=[
  {id: 1, message: 'Hi, how are you?', likesCount: ' +15'},
  {id: 2, message: 'So-so good!))', likesCount: ' +27'}
]
let dialogs=[
  {id: 1, name: 'Max'},
  {id: 2, name: 'Lena'},
  {id: 3, name: 'Mika'}
]
let messages=[
  {id: 1, message: 'Heeeeeeyy))'},
  {id: 2, message: 'What are you doing?'},
  {id: 3, message: 'See you))'}
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

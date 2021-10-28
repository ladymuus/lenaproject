import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

let rerenderEntireTree = (state) => {
  ReactDOM.render( //отрисовка всего дерева
    <BrowserRouter>
    <Provider store={store}>
      <App />    
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
//props прокидывает через все дерево
rerenderEntireTree (store.getState());

store.subscribe  (() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
//bind связали c props.addpost()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

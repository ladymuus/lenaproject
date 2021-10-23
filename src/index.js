import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render( //отрисовка всего дерева
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>    
    </BrowserRouter>,
    document.getElementById('root')
  );
}
//props прокидывает через все дерево
rerenderEntireTree (store.getState());

store.subscribe (rerenderEntireTree);
//bind связали c props.addpost()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

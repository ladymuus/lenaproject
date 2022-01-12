import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import React from 'react-redux';

let store = {
  _state:{
    profilePage:{
      posts:[
      {id: 1, message: 'Hi, how are you?', likesCount: ' +15'},
      {id: 2, message: 'So-so good!))', likesCount: ' +27'}
    ],
    newPostText:
      'it-kamasutra.com'
    },
    dialogsPage:{
      messages:[
      {id: 1, message: 'Heeeeeeyy))'},
      {id: 2, message: 'What are you doing?'},
      {id: 3, message: 'I`m training)'}
    ],
    dialogs:[
      {id: 1, name: 'Max'},
      {id: 2, name: 'Lena'},
      {id: 3, name: 'Mika'}
    ],
    newMessageBody:""
  },

  sidebar:{
    friends:[
      {id: 1, name: 'Max'},
      {id: 2, name: 'Lena'}
    ]
  }
},
getState (){
  return this._state;
},
_callSubscriber (){
  console.log('state changed');
},
subscribe (observer){
  this._callSubscriber = observer;//обсервер, паттерн
},
dispatch(action){
  this._state.profilePage=profileReducer(this._state.profilePage, action);
  this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
  this._state.sidebar=sidebarReducer(this._state.sidebar, action);
  this._callSubscriber (this._state);
}
}

export default store;
window.store=store;

  //store - OOP, action - обьект, который описывает какое действие совершить {type: 'ADD-POST'}
  //сначала открываем node js, начиная новый app проект
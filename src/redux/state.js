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
    ]
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
if(action.type==='ADD-POST'){
  let newPost = {
    id:5,
    message: this._state.profilePage.newPostText,
    likesCount: 0
  };
  this._state.profilePage.posts.push (newPost);
  this._state.profilePage.newPostText='';
  this._callSubscriber (this._state)
}else if(action.type === 'UPDATE-NEW-POST-TEXT'){
  this._state.profilePage.newPostText = action.newText;
  this._callSubscriber (this._state)
}
}
}

  export default store;
 window.store=store;

  //store - OOP, action - обьект, который описывает какое действие совершить {type: 'ADD-POST'}
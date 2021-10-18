let rerenderEntireTree = () =>{
  console.log('state changed');
}

  let state={
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
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push (newPost);
  state.profilePage.newPostText='';
  rerenderEntireTree (state)
}
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree (state)
}
export const subscribe = (observer) => {
  rerenderEntireTree = observer;//обсервер, паттерн
}

  export default state;

  //store - OOP
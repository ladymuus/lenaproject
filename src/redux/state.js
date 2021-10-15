import { rerenderEntireTree } from "../render";

  let state={
    profilePage:{
      posts:[
      {id: 1, message: 'Hi, how are you?', likesCount: ' +15'},
      {id: 2, message: 'So-so good!))', likesCount: ' +27'}
    ]
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

export let addPost = (postMessage) => {
  let newPost = {
    id:5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push (newPost);
  rerenderEntireTree (state)
}

  export default state;
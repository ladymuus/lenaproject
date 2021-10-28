import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import storeContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {

  return( 
  <storeContext.Consumer>
    {store => {
      let state = store.getState();
      let addPost = () => {
        store.dispatch(addPostActionCreator());
      };
      let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator (text);
        store.dispatch(action);
      };
      return <MyPosts updateNewPostText={onPostChange} 
                  addPost={addPost} 
                  posts={state.profilePage.posts} 
                  newPostText={state.profilePage.newPostText}/>
    }
    }
    </storeContext.Consumer>
  )
};

export default MyPostsContainer;

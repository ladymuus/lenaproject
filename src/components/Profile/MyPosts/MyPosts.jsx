import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
  };
 
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
  };

  return (
    <div className={s.item}>
      <div className={s.stolby}>
        <h3>My post</h3>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
        <div className={s.post}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;

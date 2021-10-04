import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
   
    let postsElements=props.posts.map(p=> <Post message={p.message} like={p.likesCount}/>)
    
    return (
    <div className={s.item}>
        <div className={s.stolby}>
<h3>My post</h3>
<div> <textarea></textarea></div>
<div><button>Send</button></div>
<div className={s.post}>
{postsElements}
</div>
</div>
</div>)
}

export default MyPosts;
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts=[
        {id: 1, message: 'Hi, how are you?', likesCount: ' +15'},
        {id: 2, message: 'So-so good!))', likesCount: ' +27'}
    ]
    let postsElements=posts.map(p=> <Post message={p.message} like={p.likesCount}/>)
    
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
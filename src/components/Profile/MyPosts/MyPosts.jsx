import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postData=[
        {id: 1, message: 'Hi, how are you?', likesCount:15},
        {id: 2, message: 'So-so good!))', likesCount:27}
    ]
    return (
    <div className={prof.item}>
        <div className={prof.stolby}>
<h3>My post</h3>
<div> <textarea></textarea></div>
<div><button>Send</button></div>
<div className={prof.post}>
<Post message={postData[0].message} likesCount={postData[0].likesCount}/>
<Post message={postData[1].message} likesCount={postData[1].likesCount}/>
</div>
</div>
</div>)
}

export default MyPosts;
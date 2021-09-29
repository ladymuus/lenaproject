import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div className={prof.item}>
        <div className={prof.stolby}>
<h3>My post</h3>
<div> <textarea></textarea></div>
<div><button>Send</button></div>
<div className={prof.post}>
<Post message='Hi, how are you?' Like='+15' />
<Post message='So-so good!))' Like='+27'/>
</div>
</div>
</div>)
}

export default MyPosts;
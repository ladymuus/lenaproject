import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div className={prof.item}> 
<div>My post</div>
    <textarea></textarea>
    <button>Send</button>
<div className={prof.post}>
<Post message='Hi, how are you?' Like='+15' />
<Post message='So-so good!))' Like='27'/>
</div>
</div>)
}

export default MyPosts;
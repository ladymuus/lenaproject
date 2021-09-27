import React from 'react';
import prof from './Post.module.css';

const Post=(props) => {
    return (<div className={prof.item}>
<div><img src='https://www.spletnik.ru/img/__post/60/60cf0ac41d8c3404a26fb544a0887c1d_994.jpg'></img>
{props.message}
</div>
<span>Like{props.Like}</span>
</div>
);
}

export default Post;
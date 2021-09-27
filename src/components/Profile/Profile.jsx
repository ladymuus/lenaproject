import React from 'react';
import prof from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content=() => {
    return (
<div className={prof.content}>
<div><img src='https://static.wikia.nocookie.net/6635af79-b530-4d24-8fd6-410aa60be0a9'></img>
</div>
{/* <div className={prof.Content}><img src='https://www.spletnik.ru/img/__post/60/60cf0ac41d8c3404a26fb544a0887c1d_994.jpg'></img>
</div> */}
<MyPosts/>
</div>
);
}

export default Content;
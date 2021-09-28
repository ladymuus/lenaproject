import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content=() => {
    return (
<div>
<div className={s.item}><img src='https://i.artfile.ru/1920x1200_1521837_[www.ArtFile.ru].jpg'></img>
</div>
<MyPosts/>
</div>
);
}

export default Content;
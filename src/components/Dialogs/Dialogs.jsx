import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem= (props)=>{
  let path="/dialogs/" + props.id
    return (
        <div className={s.dialog}><NavLink to={path} activeClassName={s.active}>{props.name}</NavLink></div>
    )
}
const Message=(props)=>{
    return ( <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let dialogsData=[
        {id: 1, name: 'Max'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Mika'}
    ]
    let messagesData=[
        {id: 1, message: 'Heeeeeeyy))'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'See you))'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
            </div>
    );
}

export default Dialogs;
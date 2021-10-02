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
    let dialogs=[
        {id: 1, name: 'Max'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Mika'}
    ]
     let messages=[
        {id: 1, message: 'Heeeeeeyy))'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'See you))'}
    ]
    let dialogsElements=dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m=> <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            </div>
    );
}

export default Dialogs;
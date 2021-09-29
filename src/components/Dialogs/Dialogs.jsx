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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Max" id="1"/>
                <DialogItem name="Lena" id="2"/>
                <DialogItem name="Mika" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message="Heeeeeeyyy))"/>
                <Message message="What are you doing?"/>
                <Message message="See you))"/>
            </div>
            </div>
    );
}

export default Dialogs;
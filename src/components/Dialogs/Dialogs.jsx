import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}><NavLink to='/dialogs/1' activeClassName={s.active}>Max</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/2'activeClassName={s.active}>Lena</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/3'activeClassName={s.active}>Mika</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Heeeey)))</div>
                <div className={s.dialog}>What are you doing?</div>
                <div className={s.dialog}>See you later))</div>
            </div>
            </div>
    );
}

export default Dialogs;
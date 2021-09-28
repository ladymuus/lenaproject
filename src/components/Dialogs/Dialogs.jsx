import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>Max</div>
                <div className={s.dialog}>Lena</div>
                <div className={s.dialog}>Mika</div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Heeeey)))</div>
                <div className={s.dialog}>What are you doing?</div>
                <div className={s.dialog}>See you later))</div>
            </div></div>
    );
}

export default Dialogs;
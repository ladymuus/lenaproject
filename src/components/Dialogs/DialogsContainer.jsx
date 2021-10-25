import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
   
    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange=(body)=>{
        props.store.dispatch(updateNewMessageBodyCreator(body));
    } //e.target достучаться до события, в обычном случае когда событие случается
    return (
        <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
    );
}

export default DialogsContainer;
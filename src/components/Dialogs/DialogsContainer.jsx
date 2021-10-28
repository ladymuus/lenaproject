import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import storeContext from "../../storeContext";
import Dialogs from "./Dialogs";



const DialogsContainer = () => {
  return <storeContext.Consumer>
      {store => {
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        }
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        } //e.target достучаться до события, в обычном случае когда событие случается
        return <Dialogs
          updateNewMessageBodyCreator={onNewMessageChange}
          sendMessage={onSendMessageClick}
          dialogsPage={store.getState().dialogsPage}/>
      }}
    </storeContext.Consumer>
};

export default DialogsContainer;

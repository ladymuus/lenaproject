import React from 'react';
import { connect } from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMassageBody: state.dialogsPage.newMassageBody
  }
}
let mapDispatchToProps=(dispatch) => {
  return {
    sendMessage: () => {
      dispatch (sendMessageCreator());
    },
    updateNewMessageBodyCreator: (body) => {
      dispatch (updateNewMessageBodyCreator(body));
    }
  }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;

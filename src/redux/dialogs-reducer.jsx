const UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE='SEND_MESSAGE';

let initialState = {
    messages:[
        {id: 1, message: 'Heeeeeeyy))'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'I`m training)'}
      ],
      dialogs:[
        {id: 1, name: 'Max'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Mika'}
      ],
      newMessageBody:""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
    case UPDATE_NEW_MESSAGE_BODY:
        return { 
            ...state,
            newMessageBody: action.body
         };
    case SEND_MESSAGE:
         let body = state.newMessageBody;
         return { 
            ...state,
            newMessageBody: '',
            messages:[ ...state.messages, {id: 4, message: body}]
         };
    default:
        return state;
    };
}

export const sendMessageCreator =()=>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator =(body)=>({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
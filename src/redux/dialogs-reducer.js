import {dialogsAPI, profileAPI} from "../API/API";

const ADD_MESSAGE = "ADD-MESSAGE";
const SET_DIALOGS = "SET_DIALOGS";
const SET_DIALOG = "SET_DIALOG";
const SET_MESSAGES = "SET_MESSAGES";

const initialState = {
    messages: [],
    dialogs: [],
    dialog: null,
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                message: action.payload.message,
                name: action.payload.user.name,
                addedDate: action.payload.addedDate,
                senderId: action.payload.user.authId,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        case SET_DIALOGS: {
            return {
                ...state,
                dialogs: action.payload
            }
        }
        case SET_DIALOG: {
            return {
                ...state,
                dialog: {...action.payload}
            }
        }
        case SET_MESSAGES: {
            let messages = action.payload.map(m => ({
                id: m.id,
                message: m.body,
                name: m.senderName,
                addedDate: m.addedAt,
                senderId: m.senderId
            }))
            return {
                ...state,
                messages: messages
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (user, message, addedDate) => ({type: ADD_MESSAGE, payload: {user, message, addedDate}});
export const setDialogsActionCreator = (users) => ({type: SET_DIALOGS, payload: users});
export const setDialogActionCreator = (user) => ({type: SET_DIALOG, payload: user});
export const setMessagesActionCreator = (messages) => ({type: SET_MESSAGES, payload: messages});

export const getDialogsThunkCreator = () => {
    return (dispatch) => {
        dialogsAPI.getUserDialogs()
            .then(dialogs => {
                dispatch(setDialogsActionCreator(dialogs))
            })
    }
}

export const getMessagesThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => dispatch(setDialogActionCreator(data)));

        dialogsAPI.getMessagesWithFriend(userId)
            .then(data => {
                return data
            })
            .then(data => dispatch(setMessagesActionCreator(data.items)))
    }
}

export const sendMessageToUserThunkCreator = (user, message) => {
    return (dispatch) => {
        dialogsAPI.sendMessageToUser(user.userId, message)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(addMessageActionCreator(user, message, new Date()))
                }
            })
    }
}
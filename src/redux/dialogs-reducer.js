import {dialogsAPI, profileAPI} from "../API/API";

const ADD_MESSAGE = "dialogs-reducer/ADD-MESSAGE";
const SET_DIALOGS = "dialogs-reducer/SET_DIALOGS";
const SET_DIALOG = "dialogs-reducer/SET_DIALOG";
const SET_MESSAGES = "dialogs-reducer/SET_MESSAGES";
const TOGGLE_IS_FETCHING = "dialogs-reducer/TOGGLE_IS_FETCHING";
const TOGGLE_MESSAGES_IS_FETCHING = "dialogs-reducer/TOGGLE_MESSAGES_IS_FETCHING";

const initialState = {
    messages: [],
    dialogs: [],
    dialog: null,
    isFetching: false,
    messagesIsFetching: false
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case TOGGLE_MESSAGES_IS_FETCHING: {
            return {
                ...state,
                messagesIsFetching: action.payload
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (user, message, addedDate) => ({
    type: ADD_MESSAGE,
    payload: {user, message, addedDate}
});
export const setDialogsActionCreator = (users) => ({type: SET_DIALOGS, payload: users});
export const setDialogActionCreator = (user) => ({type: SET_DIALOG, payload: user});
export const setMessagesActionCreator = (messages) => ({type: SET_MESSAGES, payload: messages});
export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
export const toggleMessagesIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_MESSAGES_IS_FETCHING, payload: isFetching});

export const getDialogsThunkCreator = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));

        let dialogs = await dialogsAPI.getUserDialogs();
        dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setDialogsActionCreator(dialogs));
    }
}

export const getMessagesThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggleMessagesIsFetchingActionCreator(true));
        let profileAPIData = await profileAPI.getUserProfile(userId);
        dispatch(setDialogActionCreator(profileAPIData));

        let dialogsAPIData = await dialogsAPI.getMessagesWithFriend(userId);
        dispatch(toggleMessagesIsFetchingActionCreator(false));
        dispatch(setMessagesActionCreator(dialogsAPIData.items));
    }
}

export const sendMessageToUserThunkCreator = (user, message) => {
    return async (dispatch) => {
        let data = await dialogsAPI.sendMessageToUser(user.userId, message);

        if (data.resultCode === 0) {
            dispatch(addMessageActionCreator(user, message, new Date()))
        }
    }
}
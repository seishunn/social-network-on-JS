import {PhotosType} from "../components/Users/Users";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";

const {dialogsAPI, profileAPI} = require("../API/API");

const ADD_MESSAGE = "dialogs-reducer/ADD-MESSAGE";
const SET_DIALOGS = "dialogs-reducer/SET_DIALOGS";
const SET_DIALOG = "dialogs-reducer/SET_DIALOG";
const SET_MESSAGES = "dialogs-reducer/SET_MESSAGES";
const CLEARE_MESSAGES = "dialogs-reducer/CLEARE_MESSAGES";
const TOGGLE_IS_FETCHING = "dialogs-reducer/TOGGLE_IS_FETCHING";
const TOGGLE_MESSAGES_IS_FETCHING = "dialogs-reducer/TOGGLE_MESSAGES_IS_FETCHING";

type DialogsUserType = {
    authId: number
    name: string
    userId: number
};
export type SendMessageType = {
    addedDate: string | Date
    id?: string
    message: string
    name: string
    senderId: number
};
export type DialogsInArrayType = {
    hasNewMessages: boolean
    id: number
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
    userName: string
};
type DialogUserType = {
    aboutMe?: string
    contacts?: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string | null
    photos: PhotosType
    userId: number | null
};

type InitialStateType = {
    messages: Array<SendMessageType>
    dialogs: Array<DialogsInArrayType>
    dialog: any
    isFetching: boolean
    messagesIsFetching: boolean
    totalCount: number | null
}

const initialState: InitialStateType = {
    messages: [],
    dialogs: [],
    dialog: null,
    isFetching: false,
    messagesIsFetching: false,
    totalCount: null
}

type ActionTypes = AddMessageActionType | SetDialogsActionType | SetDialogActionType
| SetMessagesActionType | ToggleIsFetchingActionType | ToggleMessagesIsFetchingActionType
| ClearMessageActionType;

export const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: SendMessageType = {
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
            let messages = action.payload.messages.map((m: any) => ({
                id: m.id,
                message: m.body,
                name: m.senderName,
                addedDate: m.addedAt,
                senderId: m.senderId
            }))

            return {
                ...state,
                messages: [...state.messages, ...messages],
                totalCount: action.payload.totalCount
            }
        }
        case CLEARE_MESSAGES: {
            return {
                ...state,
                messages: []
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

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    payload: {
        user: DialogsUserType
        message: string
        addedDate: Date
    }
};
export const addMessageActionCreator = (user: DialogsUserType, message: string, addedDate: Date): AddMessageActionType => ({type: ADD_MESSAGE, payload: {user, message, addedDate}});
type SetDialogsActionType = {
    type: typeof SET_DIALOGS
    payload: Array<DialogsInArrayType>
};
export const setDialogsActionCreator = (users: Array<DialogsInArrayType>): SetDialogsActionType => ({type: SET_DIALOGS, payload: users});
type SetDialogActionType = {
    type: typeof SET_DIALOG
    payload: DialogUserType
};
export const setDialogActionCreator = (user: DialogUserType): SetDialogActionType => ({type: SET_DIALOG, payload: user});
type SetMessagesActionType = {
    type: typeof SET_MESSAGES
    payload: {
        messages: Array<SendMessageType>
        totalCount: number | null
    }
};
export const setMessagesActionCreator = (messages: Array<SendMessageType>, totalCount: number | null): SetMessagesActionType => ({type: SET_MESSAGES, payload: {messages, totalCount}});
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    payload: boolean
};
export const toggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
type ToggleMessagesIsFetchingActionType = {
    type: typeof TOGGLE_MESSAGES_IS_FETCHING
    payload: boolean
};
export const toggleMessagesIsFetchingActionCreator = (isFetching: boolean): ToggleMessagesIsFetchingActionType => ({type: TOGGLE_MESSAGES_IS_FETCHING, payload: isFetching});
type ClearMessageActionType = {
    type: typeof CLEARE_MESSAGES
};
export const clearMessageActionCreator = (): ClearMessageActionType => ({type: CLEARE_MESSAGES});

// Thunk
type ThunkType = ThunkAction<void, RootState, any, ActionTypes>;

export const getDialogsThunkCreator = (): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));

        let dialogs = await dialogsAPI.getUserDialogs();
        dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setDialogsActionCreator(dialogs));
    }
};
export const getMessagesThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleMessagesIsFetchingActionCreator(true));
        let profileAPIData = await profileAPI.getUserProfile(userId);
        dispatch(setDialogActionCreator(profileAPIData));
        dispatch(clearMessageActionCreator());

        let count = 20;
        let dialogsAPIData = await dialogsAPI.getMessagesWithFriend(userId, 1, count);
        let pagesCount = Math.ceil(dialogsAPIData.totalCount / count);

        for (let i = pagesCount; i >= 1; i--) {
            let dialogsAPIData = await dialogsAPI.getMessagesWithFriend(userId, i, count);
            dispatch(setMessagesActionCreator(dialogsAPIData.items, dialogsAPIData.totalCount));
        }

        dispatch(toggleMessagesIsFetchingActionCreator(false));
    }
};
export const sendMessageToUserThunkCreator = (user: DialogsUserType, message: string): ThunkType => {
    return async (dispatch) => {
        let data = await dialogsAPI.sendMessageToUser(user.userId, message);

        if (data.resultCode === 0) {
            dispatch(addMessageActionCreator(user, message, new Date()))
        }
    }
}
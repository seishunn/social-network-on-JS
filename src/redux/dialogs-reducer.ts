import {PhotosType} from "../components/Users/Users";
import {ActionType} from "./auth-reducer";

const {dialogsAPI, profileAPI} = require("../API/API");

const ADD_MESSAGE = "dialogs-reducer/ADD-MESSAGE";
const SET_DIALOGS = "dialogs-reducer/SET_DIALOGS";
const SET_DIALOG = "dialogs-reducer/SET_DIALOG";
const SET_MESSAGES = "dialogs-reducer/SET_MESSAGES";
const CLEARE_MESSAGES = "dialogs-reducer/CLEARE_MESSAGES";
const TOGGLE_IS_FETCHING = "dialogs-reducer/TOGGLE_IS_FETCHING";
const TOGGLE_MESSAGES_IS_FETCHING = "dialogs-reducer/TOGGLE_MESSAGES_IS_FETCHING";

type DialogsInArrayType = {
    hasNewMessages: boolean
    id: number
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
    userName: string
}
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
}

type InitialStateType = {
    messages: Array<any>
    dialogs: Array<any>
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

export const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {
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

export const addMessageActionCreator = (user: any, message: string, addedDate: Date) => ({type: ADD_MESSAGE, payload: {user, message, addedDate}});
type SetDialogsActionType = {
    type: typeof SET_DIALOGS
    payload: Array<DialogsInArrayType>
}
export const setDialogsActionCreator = (users: Array<DialogsInArrayType>): SetDialogsActionType => ({type: SET_DIALOGS, payload: users});
export const setDialogActionCreator = (user: DialogUserType) => ({type: SET_DIALOG, payload: user});
export const setMessagesActionCreator = (messages: string, totalCount: number | null) => ({type: SET_MESSAGES, payload: {messages, totalCount}});
export const toggleIsFetchingActionCreator = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
export const toggleMessagesIsFetchingActionCreator = (isFetching: boolean) => ({type: TOGGLE_MESSAGES_IS_FETCHING, payload: isFetching});
export const clearMessageActionCreator = () => ({type: CLEARE_MESSAGES});

export const getDialogsThunkCreator = () => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingActionCreator(true));

        let dialogs = await dialogsAPI.getUserDialogs();
        dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setDialogsActionCreator(dialogs));
    }
}

export const getMessagesThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
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
}

export const sendMessageToUserThunkCreator = (user: any, message: string) => {
    return async (dispatch: any) => {
        let data = await dialogsAPI.sendMessageToUser(user.userId, message);

        if (data.resultCode === 0) {
            dispatch(addMessageActionCreator(user, message, new Date()))
        }
    }
}
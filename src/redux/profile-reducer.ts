import {profileAPI} from "../API/API";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";

const ADD_POST = "profile-reducer/ADD_POST";
const SET_USER_PROFILE = "profile-reducer/SET_USER_PROFILE";
const SET_USER_STATUS = "profile-reducer/SET_USER_STATUS";
const TOGGLE_IS_FETCHING = "profile-reducer/TOGGLE_IS_FETCHING";
const UPDATE_MY_IMAGE = "profile-reducer/UPDATE_MY_IMAGE";

type PostType = {
    id: number
    message: string
}
type InitialStateType = {
    posts: Array<PostType>
    profile: any
    isFetching: boolean
    status: string
}
const initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Привет, React"},
        {id: 2, message: "Привет, JS"},
        {id: 3, message: "Привет, bundle.js"},
        {id: 4, message: "Привет, props"},
    ],
    profile: null,
    isFetching: false,
    status: ""
}

type ActionTypes = AddPostActionType | SetUserProfileActionType | SetUserStatusActionType
| ToggleIsFetchingActionType | SavePhotoSuccessActionType;

export const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.payload
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: {...action.payload},
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.payload
            }
        }
        case UPDATE_MY_IMAGE: {
            return {
                ...state,
                profile: {...state.profile, photos: action.payload}
            }
        }
        default:
            return state;
    }
}
type AddPostActionType = {
    type: typeof ADD_POST
    payload: string
};
export let addPostActionCreator = (postText: string): AddPostActionType => ({type: ADD_POST, payload: postText});
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    payload: any
};
export let setUserProfileActionCreator = (user: any): SetUserProfileActionType => ({type: SET_USER_PROFILE, payload: user});
type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS
    payload: string
};
export let setUserStatusActionCreator = (status: string): SetUserStatusActionType => ({type: SET_USER_STATUS, payload: status});
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    payload: boolean
};
export let toggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, payload: isFetching})
type SavePhotoSuccessActionType = {
    type: typeof UPDATE_MY_IMAGE
    payload: any
};
export let savePhotoSuccessActionCreator = (photos: any): SavePhotoSuccessActionType => ({type: UPDATE_MY_IMAGE, payload: photos})

// Thunk
type ThunkType = ThunkAction<void, RootState, any, ActionTypes>;

export const getUserThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));

        let data = await profileAPI.getUserProfile(userId);
        dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setUserProfileActionCreator(data));
    }
};
export const getUserStatusThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        let status = await profileAPI.getStatus(userId);

        dispatch(setUserStatusActionCreator(status));
    }
};
export const updateUserStatusThunkCreator = (status: string): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status);

        if (data.resultCode === 0) {
            dispatch(setUserStatusActionCreator(status))
        }
    }
};
export const updateProfileImageThunkCreator = (image: any): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.updateUserImage(image);
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccessActionCreator(data.data.photos));
        }
    }
};


import {profileAPI} from "../API/API";

const ADD_POST = "profile-reducer/ADD_POST";
const UPDATE_NEW_POST_TEXT = "profile-reducer/UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "profile-reducer/SET_USER_PROFILE";
const SET_USER_STATUS = "profile-reducer/SET_USER_STATUS";
const TOGGLE_IS_FETCHING = "profile-reducer/TOGGLE_IS_FETCHING";
const UPDATE_MY_IMAGE = "profile-reducer/UPDATE_MY_IMAGE";

const initialState = {
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

export const profileReducer = (state = initialState, action) => {
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
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.payload
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

export let addPostActionCreator = (postText) => ({type: ADD_POST, payload: postText});
export let setUserProfileActionCreator = (user) => ({type: SET_USER_PROFILE, payload: user});
export let setUserStatusActionCreator = (status) => ({type: SET_USER_STATUS, payload: status});
export let toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching})
export let savePhotoSuccessActionCreator = (photos) => ({type: UPDATE_MY_IMAGE, payload: photos})

export const getUserThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));

        let data = await profileAPI.getUserProfile(userId);
        dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setUserProfileActionCreator(data));
    }
}

export const getUserStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        let status = await profileAPI.getStatus(userId);

        dispatch(setUserStatusActionCreator(status));
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status);

        if (data.resultCode === 0) {
            dispatch(setUserStatusActionCreator(status))
        }
    }
}

export const updateProfileImageThunkCreator = (image) => {
    return async (dispatch) => {
        let data = await profileAPI.updateUserImage(image);
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccessActionCreator(data.data.photos));
        }
    }
}


import {authAPI, securityAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA = "SET_CAPTCHA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captcha: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload.user,
                isAuth: action.payload.isAuth
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.payload
            }
        }
        default:
            return state
    }
}

export const setUserDataActionCreator = (user, isAuth) => ({type: SET_USER_DATA, payload: {user, isAuth}});
export const setCaptchaActionCreator = (url) => ({type: SET_CAPTCHA, payload: url});

export const setUserDataThunkCreator = () => {
    return dispatch => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserDataActionCreator(data.data, true));
                }
            })
    }
}

export const getCaptcha = () => {
    return (dispatch) => {
        securityAPI.getCaptcha()
            .then(response => dispatch(setCaptchaActionCreator(response.url)))
    }
}

export const loginThunkCreator = (formData) => {

    return (dispatch) => {
        authAPI.login(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserDataThunkCreator());
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : "Unknown error";
                    dispatch(stopSubmit("login", {_error: message}));
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserDataActionCreator({
                        id: null,
                        email: null,
                        login: null,
                        isFetching: false,
                    }, false))
                }
            })
    }
}

export const setUserAvatarThunkCreator = () => {}
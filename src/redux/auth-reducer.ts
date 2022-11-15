import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";

const {authAPI, securityAPI} = require("../API/API");
const {stopSubmit} = require("redux-form");

const SET_USER_DATA = "auth-reducer/SET_USER_DATA";
const SET_CAPTCHA = "auth-reducer/SET_CAPTCHA";

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean,
    captcha: string | null,
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captcha: null,
}

type ActionTypes = SetAuthUserDataActionType | SetCaptchaActionType;

export const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload.user,
                isAuth: action.payload.isAuth,
                isFetching: action.payload.isFetching
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

type UserType = {
    email: string | null
    id: number | null
    login: string | null
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: {
        user: UserType
        isAuth: boolean
        isFetching: boolean
    }
}
export const setAuthUserDataActionCreator = (user: UserType, isAuth: boolean, isFetching: boolean): SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {user, isAuth, isFetching}});
type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    payload: string | null
}
export const setCaptchaActionCreator = (url: string | null): SetCaptchaActionType => ({type: SET_CAPTCHA, payload: url});

// Thunk
type ThunkType = ThunkAction<void, RootState, any, ActionTypes>;

export const setAuthUserDataThunkCreator = (): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.me();

        if (data.resultCode === 0) {
            dispatch(setAuthUserDataActionCreator(data.data, true, true));
        }
    }
};
export const getCaptcha = (): ThunkType => {
    return async (dispatch) => {
        let data = await securityAPI.getCaptcha();
        dispatch(setCaptchaActionCreator(data.url));
    }
};

export type LoginFormDataType = {
    login: string
    password: string
    captchaText?: string
};
export const loginThunkCreator = (formData: LoginFormDataType): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.login(formData);

        if (data.resultCode === 0) {
            dispatch(setAuthUserDataThunkCreator());
            dispatch(setCaptchaActionCreator(null))
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            let message = data.messages.length > 0 ? data.messages[0] : "Unknown error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    }
};

export const logoutThunkCreator = (): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.logout();

        if (data.resultCode === 0) {
            dispatch(setAuthUserDataActionCreator({
                id: null,
                email: null,
                login: null,
            }, false, false))
        }
    }
};
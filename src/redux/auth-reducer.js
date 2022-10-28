import {profileAPI} from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setUserDataActionCreator = (user) => ({type: SET_USER_DATA, payload: user});

export const setUserDataThunkCreator = () => {
    return dispatch => {
        profileAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserDataActionCreator(data.data));
                }
            })
    }
}
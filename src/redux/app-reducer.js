import {setAuthUserDataThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccessActionCreator = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunkCreator = () => {
    return (dispatch) => {
        let dispatchResult = dispatch(setAuthUserDataThunkCreator());
        dispatchResult
            .then(result => dispatch(initializedSuccessActionCreator()))
    }
}
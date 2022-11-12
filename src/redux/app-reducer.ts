import {ActionType} from "./auth-reducer";

const {setAuthUserDataThunkCreator} = require("./auth-reducer");

const INITIALIZED_SUCCESS = "app-reducer/INITIALIZED_SUCCESS";

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state= initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccessActionCreator = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunkCreator = () => {
    return (dispatch: any) => {
        let dispatchResult = dispatch(setAuthUserDataThunkCreator());
        dispatchResult
            .then((result: any) => dispatch(initializedSuccessActionCreator()))
    }
}
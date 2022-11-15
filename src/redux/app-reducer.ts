import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";

const {setAuthUserDataThunkCreator} = require("./auth-reducer");

const INITIALIZED_SUCCESS = "app-reducer/INITIALIZED_SUCCESS";

export type InitialStateType = {
    initialized: boolean
}
const initialState: InitialStateType = {
    initialized: false
}

type ActionTypes = InitializedSuccessActionType;

export const appReducer = (state= initialState, action: ActionTypes): InitialStateType => {
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
};
export const initializedSuccessActionCreator = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunkCreator = (): ThunkAction<void, RootState, any, ActionTypes> => {
    return (dispatch) => {
        let dispatchResult = dispatch(setAuthUserDataThunkCreator());
        dispatchResult
            .then((result: any) => dispatch(initializedSuccessActionCreator()))
    }
}
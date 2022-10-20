const SET_USER = "SET_USER";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";

const initialState = {
    users: [
        // {id: 1, name: "John", status: "Мой статус", photo: "", followed: false},
        // {id: 2, name: "John", status: "Мой статус", photo: "", followed: false},
        // {id: 3, name: "John", status: "Мой статус", photo: "", followed: false},
        // {id: 4, name: "John", status: "Мой статус", photo: "", followed: false},
        // {id: 5, name: "John", status: "Мой статус", photo: "", followed: false},
        // {id: 6, name: "John", status: "Мой статус", photo: "", followed: false},
        // {id: 7, name: "John", status: "Мой статус", photo: "", followed: false},
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                users: [...state.users, ...action.payload],
            }
        }
        case FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload? {...user, followed: true}: user),
            }
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload? {...user, followed: false}: user),
            }
        }
        default: {
            return state;
        }
    }
}

export let setUSERActionCreator = (users) => ({type: SET_USER, payload: users});
export let followUserActionCreator = (id) => ({type: FOLLOW_USER, payload: id});
export let unfollowUserActionCreator = (id) => ({type: UNFOLLOW_USER, payload: id});
import {RootState} from "./redux-store";

export const getUsers = (state: RootState) => {
    // return state
    return state.usersPage.users
}

export const getPageSize = (state: RootState) => {
    // @ts-ignore
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootState) => {
    // @ts-ignore
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootState) => {
    // @ts-ignore
    return state.usersPage.currentPage
}

export const getFetching = (state: RootState) => {
    // @ts-ignore
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootState) => {
    // @ts-ignore
    return state.usersPage.followingInProgress
}
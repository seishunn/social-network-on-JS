import React from "react";
import style from "./Users.module.css"
const {Paginator} = require("../../common/Paginator/Paginator.tsx");
const {User} = require("./User/User");

export type PhotosType = {
    large: string | null
    small: string | null
}
export type UserType = {
    followed: boolean
    id: boolean
    name: string
    photos: PhotosType
    status: string | null
    uniqueUrlName: string | null
}

type UsersType = {
    totalUsersCount: number
    pageSize?: number
    users: Array<UserType>
    pageChanged: (page: number) => void
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersType> = ({
                          totalUsersCount, pageSize, users,
                          pageChanged, currentPage, follow,
                          unfollow, followingInProgress}) => {
    const usersList = users.map(user => (
        <User
            id={user.id}
            key={user.id}
            name={user.name}
            status={user.status}
            photos={user.photos}
            followed={user.followed}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
        />)
    );

    return (
        <div className={style.main}>
            <div className={style.mainContainer}>
                <div className={style.title}>
                    Пользователи
                </div>
                <Paginator
                    currentPage={currentPage}
                    pageChanged={pageChanged}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                />
                <div className={style.users}>
                    {usersList}
                </div>
            </div>
        </div>
    );
}
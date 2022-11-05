import style from "./Users.module.css"
import {User} from "./User/User";
import {Paginator} from "../../common/Paginator/Paginator";
import React from "react";

export const Users = ({totalUsersCount, pageSize, pageChanged, changeCurrentPage, currentPage, ...props}) => {
    const usersList = props.users.map(user => (
        <User
            id={user.id}
            key={user.id}
            name={user.name}
            status={user.status}
            photos={user.photos}
            followed={user.followed}
            follow={props.follow}
            unfollow={props.unfollow}
            toggleFollowingProgress={props.toggleFollowingProgress}
            followingInProgress={props.followingInProgress}
        />)
    );

    return (
        <div className={style.main}>
            <div className={style.mainContainer}>
                <div className={style.title}>
                    Пользователи
                </div>
                <div className={style.users}>
                    {usersList}
                </div>
                <Paginator
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                    pageChanged={pageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                />
            </div>
        </div>
    );
}
import style from "./Users.module.css"
import {User} from "./User/User";
import {Paginator} from "../../common/Paginator/Paginator";
import React from "react";

export const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

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
                    pagesSize={pages}
                    currentPage={props.currentPage}
                    changeCurrentPage={props.changeCurrentPage}
                    pageChanged={props.pageChanged}
                />
            </div>
        </div>
    );
}
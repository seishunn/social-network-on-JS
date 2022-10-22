import style from "./Users.module.css"
import React from "react";
import {User} from "./User/User";
import axios from "axios";
import {Paginator} from "../../common/Paginator/Paginator";

export class UsersClass extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (page) => {
        this.props.changeCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={style.main}>
                <div className={style.mainContainer}>
                    <div className={style.title}>
                        Пользователи
                    </div>
                    <div className={style.users}>
                        {
                            this.props.users.map(user => (
                                <User
                                    id={user.id}
                                    key={user.id}
                                    name={user.name}
                                    status={user.status}
                                    photos={user.photos}
                                    followed={user.followed}
                                    follow={this.props.followUser}
                                    unfollow={this.props.unfollowUser}
                                />)
                            )
                        }
                    </div>
                    <Paginator
                        pagesSize={pages}
                        currentPage={this.props.currentPage}
                        changeCurrentPage={this.props.changeCurrentPage}
                        pageChanged={this.onPageChanged}
                    />
                </div>
            </div>
        )
    }
}
import style from "./Users.module.css"
import React from "react";
import {User} from "./User/User";
import axios from "axios";

export class UsersClass extends React.Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
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
                </div>
            </div>
        )
    }
}
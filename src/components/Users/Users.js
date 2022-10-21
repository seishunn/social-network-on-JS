import style from "./Users.module.css"
import {User} from "./User/User";
import axios from "axios";

export const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })

        }
    }

    const usersList = props.users.map(user => (
        <User
            id={user.id}
            key={user.id}
            name={user.name}
            status={user.status}
            photos={user.photos}
            followed={user.followed}
            follow={props.followUser}
            unfollow={props.unfollowUser}
        />)
    );

    return (
        <div className={style.main}>
            <div className={style.mainContainer}>
                <div className={style.title}>
                    Пользователи
                </div>
                <button onClick={getUsers}>Получить пользователей</button>
                <div className={style.users}>
                    {usersList}
                </div>
            </div>
        </div>
    );
}
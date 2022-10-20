import style from "./Users.module.css"
import {User} from "./User/User";

export const Users = (props) => {
    if (props.users.length === 0) {
        let users = [
            {id: 1, name: "John", status: "Мой статус", photo: "", followed: false},
            {id: 2, name: "John", status: "Мой статус", photo: "", followed: false},
            {id: 3, name: "John", status: "Мой статус", photo: "", followed: false},
            {id: 4, name: "John", status: "Мой статус", photo: "", followed: false},
            {id: 5, name: "John", status: "Мой статус", photo: "", followed: false},
            {id: 6, name: "John", status: "Мой статус", photo: "", followed: false},
            {id: 7, name: "John", status: "Мой статус", photo: "", followed: false},
        ]
        props.setUsers(users)
    }
    const usersList = props.users.map(user => (
        <User
            id={user.id}
            key={user.id}
            name={user.name}
            status={user.status}
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
                <div className={style.users}>
                    {usersList}
                </div>
            </div>
        </div>
    );
}
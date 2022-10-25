import style from "./User.module.css"
import DiscordLogo from "../../../assets/c09a43a372ba81e3018c3151d4ed4773.png"
import {NavLink} from "react-router-dom";
import axios from "axios";

export const User = (props) => {
    console.log(props)
    return (
        <NavLink to={`/profile/${props.id}`}>
            <div className={style.user}>
                <div className={style.userLeft}>
                    <div className={style.avatar}>
                        <img
                            src={
                                props?.photos?.small
                                    ? props?.photos.small
                                    : DiscordLogo
                            }
                            alt=""/>
                        <span className={style.avatarStatus}></span>
                    </div>
                    <div className={style.userInfo}>
                        <div className={style.name}>{props.name}<span>#{props.id}</span></div>
                        <div className={style.status}>{props.status}</div>
                    </div>
                </div>
                <div className={style.userRight}>
                    {props.followed
                        ? <button
                            className={style.link}
                            onClick={(e) => {
                                e.preventDefault()

                                axios
                                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "553d8f1d-bf7c-4895-a33e-915c206d7e8d",
                                            }
                                        }
                                    )
                                    .then(response => {
                                        console.log(response)

                                        if (response.data.resultCode === 0) {

                                        }
                                    })

                                props.unfollow(props.id)
                            }}
                        >
                            <img src="https://super.so/icon/light/user-x.svg" alt=""/>
                        </button>
                        : <button
                            className={[style.link, style.addUser].join(" ")}
                            onClick={(e) => {
                                e.preventDefault()

                                axios
                                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                                        {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "553d8f1d-bf7c-4895-a33e-915c206d7e8d",
                                            }
                                        }
                                    )
                                    .then(response => {
                                        console.log(response)

                                        if (response.data.resultCode === 0) {
                                            props.follow(props.id)
                                        }
                                    })
                            }}
                        >
                            <img src="https://super.so/icon/light/user-plus.svg" alt=""/>
                        </button>
                    }
                </div>
            </div>
        </NavLink>
    );
}
import style from "./User.module.css"
import DiscordLogo from "../../../assets/c09a43a372ba81e3018c3151d4ed4773.png"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../API/API";

export const User = (props) => {
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
                <div className={style.userRight} onClick={e => e.preventDefault()}>
                    {props.followed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === props.id)}
                            className={`${style.link} ${props.followingInProgress.some(id => id === props.id)? style.userFetching: style.removeUser}`}
                            onClick={() => {
                                props.toggleFollowingProgress(true, props.id);

                                usersAPI.unfollowUser(props.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(props.id)
                                            props.toggleFollowingProgress(false, props.id);
                                        }
                                    })

                            }}
                        >
                            <img src="https://super.so/icon/light/user-x.svg" alt=""/>
                        </button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === props.id)}
                            className={`${style.link} ${props.followingInProgress.some(id => id === props.id)? style.userFetching: style.addUser}`}
                            onClick={() => {
                                props.toggleFollowingProgress(true, props.id);

                                usersAPI.followUser(props.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(props.id);
                                            props.toggleFollowingProgress(false, props.id);
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
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import DiscordLogo from "../../../assets/c09a43a372ba81e3018c3151d4ed4773.png"

export const Dialog = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <NavLink to={path} className={({isActive, ...obj}) => isActive? (`${style.dialog} ${style.active}`) : (style.dialog)}>
            <div className={style.avatar}>
                <img src={
                    props.photos.small || props.photos.large || DiscordLogo
                } alt=""/>
            </div>
            <div className={style.name}>
                {props.userName}
            </div>
        </NavLink>
    );
}
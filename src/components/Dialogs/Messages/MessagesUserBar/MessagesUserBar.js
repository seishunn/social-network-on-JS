import style from "./MessagesUserBar.module.css";
import {NavLink} from "react-router-dom";

export const MessagesUserBar = (props) => {
    return (
        <div className={style.userName}>
            <div className={style.messagePreName}>@</div>
            <div className={style.messageName}>{props.fullName}</div>
            <div className={style.messageAka}>AKA</div>
            <NavLink to={`/profile/${props.userId}`}>{props.fullName}</NavLink>
        </div>
    );
}
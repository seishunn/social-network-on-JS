import style from "./MessagesUserBar.module.css";

export const MessagesUserBar = (props) => {
    return (
        <div className={style.userName}>
            <div className={style.messagePreName}>@</div>
            <div className={style.messageName}>{props.fullName}</div>
            <div className={style.messageAka}>AKA</div>
            <div>{props.fullName}</div>
        </div>
    );
}
import style from "./MessagesUserBar.module.css";

export const MessagesUserBar = ({messages, ...props}) => {
    return (
        <div className={style.userName}>
            <div className={style.messagePreName}>@</div>
            <div className={style.messageName}>User</div>
            <div className={style.messageAka}>AKA</div>
        </div>
    );
}
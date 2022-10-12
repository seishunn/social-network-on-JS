import style from "./DialogItems.module.css";
import {Dialog} from "../Dialog/Dialog";

export const DialogItems = ({dialogs, ...props}) => {
    return (
        <div className={style.dialogsScroller}>
            <div className={style.newMessage}>Личные сообщения</div>
            <ul className={style.dialogs}>
                {dialogs}
            </ul>
        </div>
    );
}
import style from "./DialogItems.module.css";
import {Dialog} from "../Dialog/Dialog";

export const DialogItems = (props) => {
    return (
        <div className={style.dialogsScroller}>
            <div className={style.newMessage}>Личные сообщения</div>
            <ul className={style.dialogs}>
                <li><Dialog name={"User1"} href={'/dialogs/1'}/></li>
                <li><Dialog name={"User2"} href={'/dialogs/2'}/></li>
                <li><Dialog name={"User3"} href={'/dialogs/3'}/></li>
                <li><Dialog name={"User4"} href={'/dialogs/4'}/></li>
                <li><Dialog name={"User5"} href={'/dialogs/5'}/></li>
                <li><Dialog name={"User6"} href={'/dialogs/6'}/></li>
                <li><Dialog name={"User7"} href={'/dialogs/7'}/></li>
                <li><Dialog name={"User8"} href={'/dialogs/8'}/></li>
                <li><Dialog name={"User9"} href={'/dialogs/9'}/></li>
                <li><Dialog name={"User10"} href={'/dialogs/10'}/></li>
                <li><Dialog name={"User11"} href={'/dialogs/11'}/></li>
                <li><Dialog name={"User12"} href={'/dialogs/12'}/></li>
                <li><Dialog name={"User13"} href={'/dialogs/13'}/></li>
                <li><Dialog name={"User14"} href={'/dialogs/14'}/></li>
                <li><Dialog name={"User15"} href={'/dialogs/15'}/></li>
                <li><Dialog name={"User16"} href={'/dialogs/16'}/></li>
                <li><Dialog name={"User17"} href={'/dialogs/17'}/></li>
                <li><Dialog name={"User18"} href={'/dialogs/18'}/></li>
                <li><Dialog name={"User19"} href={'/dialogs/19'}/></li>
                <li><Dialog name={"User20"} href={'/dialogs/20'}/></li>
                <li><Dialog name={"User21"} href={'/dialogs/21'}/></li>
                <li><Dialog name={"User22"} href={'/dialogs/22'}/></li>
                <li><Dialog name={"User23"} href={'/dialogs/23'}/></li>
            </ul>
        </div>
    );
}
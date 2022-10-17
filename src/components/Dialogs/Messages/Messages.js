import style from "./Messages.module.css";
import {MessagesList} from "./MessagesList/MessagesList";
import {MessagesUserBar} from "./MessagesUserBar/MessagesUserBar";
import {AddItemArea} from "../../AddItemArea/AddItemArea";

export const Messages = (props) => {
    return (
        <div className={style.messagesPage}>
            <MessagesUserBar/>
            <div className={style.messages}>
                <MessagesList messages={props.messages}/>
            </div>
            <AddItemArea
                userName={"User"}
                value={props.value}
                textChangeAction={props.textChangeAction}
                addItemAction={props.addItemAction}
            />
        </div>
    );
}
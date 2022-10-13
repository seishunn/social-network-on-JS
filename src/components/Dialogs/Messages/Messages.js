import style from "./Messages.module.css";
import {MessagesList} from "./MessagesList/MessagesList";
import {MessagesUserBar} from "./MessagesUserBar/MessagesUserBar";
import {AddItemArea} from "../../AddItemArea/AddItemArea";

export const Messages = ({messages, ...props}) => {
    return (
        <div className={style.messagesPage}>
            <MessagesUserBar/>
            <div className={style.messages}>
                <MessagesList messages={messages}/>
            </div>
            <AddItemArea userName={"User"}/>
        </div>
    );
}
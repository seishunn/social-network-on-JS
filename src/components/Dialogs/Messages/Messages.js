import style from "./Messages.module.css";
import {MessagesList} from "./MessagesList/MessagesList";
import {MessagesUserBar} from "./MessagesUserBar/MessagesUserBar";

export const Messages = ({messages, ...props}) => {
    return (
        <div className={style.messagesPage}>
            <MessagesUserBar/>
            <div className={style.messages}>
                <MessagesList messages={messages}/>
            </div>
        </div>
    );
}
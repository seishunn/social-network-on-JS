import style from "./Messages.module.css";
import {MessagesList} from "./MessagesList/MessagesList";
import {MessagesUserBar} from "./MessagesUserBar/MessagesUserBar";
import {AddItemArea} from "../../AddItemArea/AddItemArea";

export const Messages = ({messages, state, ...props}) => {
    return (
        <div className={style.messagesPage}>
            <MessagesUserBar/>
            <div className={style.messages}>
                <MessagesList messages={state.messages}/>
            </div>
            <AddItemArea
                userName={"User"}
                onButtonClick={props.addMessage}
                value={state.newMessageText}
                valueChange={props.updateNewMessageText}
            />
        </div>
    );
}
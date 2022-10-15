import style from "./Messages.module.css";
import {MessagesList} from "./MessagesList/MessagesList";
import {MessagesUserBar} from "./MessagesUserBar/MessagesUserBar";
import {AddItemArea} from "../../AddItemArea/AddItemArea";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";

export const Messages = ({state, dispatch, ...props}) => {
    return (
        <div className={style.messagesPage}>
            <MessagesUserBar/>
            <div className={style.messages}>
                <MessagesList messages={state.messages}/>
            </div>
            <AddItemArea
                userName={"User"}
                value={state.newMessageText}
                dispatch={dispatch}
                textChangeAction={(text) => updateNewMessageTextActionCreator(text)}
                addItemAction={addMessageActionCreator()}
            />
        </div>
    );
}
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import {Messages} from "./Messages";

export const MessagesContainer = ({state, dispatch, ...props}) => {
    let textChangeAction = (text) => {
        dispatch(updateNewMessageTextActionCreator(text))
    }
    let addItemAction = () => {
        dispatch(addMessageActionCreator())
    }
    return (
        <Messages
            messages={state.messages}
            value={state.newMessageText}
            textChangeAction={textChangeAction}
            addItemAction={addItemAction}
        />
    );
}
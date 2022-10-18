import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Messages} from "./Messages";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        value: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        textChangeAction: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        addItemAction: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
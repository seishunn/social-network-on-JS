import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Messages} from "./Messages";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        value: state.dialogsPage.newMessageText,
    }
}

export const MessagesContainer = connect(mapStateToProps, {
    textChangeAction: updateNewMessageTextActionCreator,
    addItemAction: addMessageActionCreator
})(Messages);
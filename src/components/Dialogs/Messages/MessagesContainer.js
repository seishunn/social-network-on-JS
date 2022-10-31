import {
    addMessageActionCreator,
    sendMessageToUserThunkCreator,
    updateNewMessageTextActionCreator
} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Messages} from "./Messages";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        value: state.dialogsPage.newMessageText,
        dialog: state.dialogsPage.dialog,
        authId: state.auth.id,
        profile: state.profilePage.profile
    }
}

export const MessagesContainer = connect(mapStateToProps, {
    textChangeAction: updateNewMessageTextActionCreator,
    addItemAction: addMessageActionCreator,
    sendMessageToUser: sendMessageToUserThunkCreator
})(Messages);
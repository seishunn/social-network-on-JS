import {connect} from "react-redux";
const {
    addMessageActionCreator,
    sendMessageToUserThunkCreator,
} = require("../../../redux/dialogs-reducer");
const {Messages} = require("./Messages");

const mapStateToProps = (state: any) => {
    return {
        messages: state.dialogsPage.messages,
        dialog: state.dialogsPage.dialog,
        authId: state.auth.id,
        profile: state.profilePage.profile,
        messagesIsFetching: state.dialogsPage.messagesIsFetching
    }
}

export const MessagesContainer = connect(mapStateToProps, {
    sendMessageToUser: sendMessageToUserThunkCreator
})(Messages);
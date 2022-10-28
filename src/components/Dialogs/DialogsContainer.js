import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth,
    }
}

export const DialogsContainer = connect(mapStateToProps, {})(Dialogs)
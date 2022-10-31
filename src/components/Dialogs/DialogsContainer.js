import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";
import React from "react";
import {
    getDialogsThunkCreator,
    getMessagesThunkCreator
} from "../../redux/dialogs-reducer";
import {withRouter} from "../../HOC/withRouter";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {setUserDataThunkCreator} from "../../redux/auth-reducer";
import {getUserThunkCreator} from "../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        authId: state.auth.id
    }
}

class DialogsContainer extends React.Component {
    async componentDidMount() {
        this.props.getDialogs();
        if (this.props.params.id) {
            this.props.getMessages(this.props.params.id);
        }
        await this.props.setUserData();
        await this.props.getUser(this.props.authId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.id !== this.props.params.id) {
            this.props.getMessages(this.props.params.id);
        }
    }

    render() {
        return (
            <Dialogs {...this.props}/>
        );
    }
}

export default compose(
    connect(mapStateToProps, {
        getDialogs: getDialogsThunkCreator,
        getMessages: getMessagesThunkCreator,
        setUserData: setUserDataThunkCreator,
        getUser: getUserThunkCreator,
    }),
    withRouter,
    withAuthRedirect
)(DialogsContainer);
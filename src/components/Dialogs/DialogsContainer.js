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
import {getUserThunkCreator} from "../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        authId: state.auth.id,
        isFetching: state.dialogsPage.isFetching
    }
}

class DialogsContainer extends React.Component {
    async componentDidMount() {
        this.props.getDialogs();
        if (this.props.params.id) {
            this.props.getMessages(this.props.params.id);
        }
        await this.props.getUser(this.props.authId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.id !== this.props.params.id) {
            if (!!this.props.params.id) {
                this.props.getMessages(this.props.params.id);
            }
        }
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader/>
        }
        return (
            <Dialogs {...this.props}/>
        );
    }
}

export default compose(
    connect(mapStateToProps, {
        getDialogs: getDialogsThunkCreator,
        getMessages: getMessagesThunkCreator,
        getUser: getUserThunkCreator,
    }),
    withRouter,
    withAuthRedirect
)(DialogsContainer);
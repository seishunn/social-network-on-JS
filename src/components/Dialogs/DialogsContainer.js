import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import React from "react";
import {getDialogsThunkCreator} from "../../redux/dialogs-reducer";
import {withRouter} from "../../HOC/withRouter";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogs();
    }

    render() {
        return (
            <Dialogs {...this.props}/>
        );
    }
}

export default compose(
    connect(mapStateToProps, {
        getDialogs: getDialogsThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(DialogsContainer);
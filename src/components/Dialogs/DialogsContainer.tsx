import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {
    DialogsInArrayType,
    getDialogsThunkCreator,
    getMessagesThunkCreator, SendMessageType
} from "../../redux/dialogs-reducer";
import {RootState} from "../../redux/redux-store";
const {Dialogs} = require("./Dialogs");
const {withRouter} = require("../../HOC/withRouter");
const {withAuthRedirect} = require("../../HOC/withAuthRedirect");
const {getUserThunkCreator} = require("../../redux/profile-reducer");
const {Preloader} = require("../../common/Preloader/Preloader");

type OwnPropsType = {
    params: {
        id: number
    }
};
type MapDispatchToPropsType = {
    getDialogs: () => void
    getMessages: (userId: number) => void
    getUser: (userId: number) => void
};
type MapStateToPropsType = {
    dialogs: Array<DialogsInArrayType>
    messages: Array<SendMessageType>
    authId: number
    isFetching: boolean
};

let mapStateToProps = (state: RootState):MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        authId: state.auth.id,
        isFetching: state.dialogsPage.isFetching
    }
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class DialogsContainer extends React.Component<PropsType> {
    async componentDidMount() {
        this.props.getDialogs();
        if (this.props.params.id) {
            this.props.getMessages(this.props.params.id);
        }
        await this.props.getUser(this.props.authId);
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
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

export default compose<any>(
    connect(mapStateToProps, {
        getDialogs: getDialogsThunkCreator,
        getMessages: getMessagesThunkCreator,
        getUser: getUserThunkCreator,
    }),
    withRouter,
    withAuthRedirect
)(DialogsContainer);
import style from "./Messages.module.css";
import {MessagesList} from "./MessagesList/MessagesList";
import {MessagesUserBar} from "./MessagesUserBar/MessagesUserBar";
import {AddItemArea} from "../../AddItemArea/AddItemArea";
import DiscordLogo from "../../../assets/c09a43a372ba81e3018c3151d4ed4773.png";
import {reduxForm} from "redux-form";

const DialogForm = (props) => {
    const onSubmit = (formData) => {
        const user = {
            authId: props.authId,
            userId: props.userId,
            name:props.senderName,
        }
        props.sendMessageToUser(user, formData.message);
        formData.message = "";
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)}>
            <AddItemArea
                userName={props.userName ?? "User"}
                senderName={props.senderName}
                name={"message"}
                authId={props.authId}
                userId={props.userId}
            />
        </form>
    )
}

const DialogReduxForm = reduxForm({
        form: "dialog"
})(DialogForm)

export const Messages = (props) => {
    return (
        <div className={style.messagesPage}>
            <MessagesUserBar fullName={props.dialog?.fullName ?? "User"} userId={props.dialog?.userId}/>
            <div className={style.messages}>
                <MessagesList
                    messages={props.messages}
                    userAvatar={props.dialog?.photos.small || props.dialog?.photos.large || DiscordLogo}
                    authAvatar={props.profile?.photos.small || props.profile?.photos.large || DiscordLogo}
                    authId={props.authId}
                />
            </div>
            <DialogReduxForm
                userName={props.dialog?.fullName ?? "User"}
                senderName={props.profile.fullName}
                authId={props.authId}
                userId={props.dialog?.userId}
                sendMessageToUser={props.sendMessageToUser}
            />
        </div>
    );
}
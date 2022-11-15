import React from "react";
import style from "./Messages.module.css";
import {reduxForm} from "redux-form";
import {Preloader} from "../../../common/Preloader/Preloader";
const {MessagesList} = require("./MessagesList/MessagesList");
const {MessagesUserBar} = require("./MessagesUserBar/MessagesUserBar");
const {AddItemArea} = require("../../AddItemArea/AddItemArea");
const DiscordLogo = require("../../../assets/c09a43a372ba81e3018c3151d4ed4773.png");

const DialogForm = (props: any) => {
    const onSubmit = (formData: any) => {
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


const DialogReduxForm: any = reduxForm({
        form: "dialog"
})(DialogForm)


type MessagesType = {
    messages: Array<any>
    dialog: any
    authId: number
    profile: any
    messagesIsFetching: boolean
    sendMessageToUser: (user: any, message: string) => any
}
export const Messages = (props: MessagesType) => {
    return (
        <>
            {props.messagesIsFetching && <Preloader/>}
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
                senderName={props.profile?.fullName}
                authId={props.authId}
                userId={props.dialog?.userId}
                sendMessageToUser={props.sendMessageToUser}
            />
        </>
    );
}
import React from "react";
import style from "./Dialogs.module.css";
import {DialogsInArrayType, SendMessageType} from "../../redux/dialogs-reducer";
const {DialogItems} = require("./DialogItems/DialogItems");
const {Dialog} = require("./Dialog/Dialog");
const {MessagesContainer} = require("./Messages/MessagesContainer");
const {WithoutMessages} = require("./Messages/NoMessages/WithoutMessages");

type DialogsType = {
    authId: number
    dialogs: Array<DialogsInArrayType>
    getDialogs: () => any
    getMessages: (userId: number) => any
    getUser: (userId: number) => any
    isAuth: boolean
    isFetching: boolean
    messages: Array<SendMessageType>
    params: any
};

export const Dialogs = (props: any) => {
    let dialogsElements = props.dialogs.map((dialog: any) => <li key={dialog.id}><Dialog {...dialog}/></li>);
    return (
        <div className={style.dialogsPage}>
            <div className={style.dialogsSideBar + ` ` + (!props.params.id? style.visibleDialogsSideBar : style.hiddenDialogsSideBar)}>
                <DialogItems dialogs={dialogsElements}/>
            </div>
            <div className={style.messagesPage + ` ` + (!props.params.id? style.hiddenMessagePage : style.visibleMessagePage)}>
                {
                    !props.params.id ? <WithoutMessages/> : <MessagesContainer/>
                }
            </div>
        </div>
    );
}
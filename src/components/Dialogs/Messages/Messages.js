import style from "./Messages.module.css";
import {MessagesList} from "./MessagesList/MessagesList";
import {MessagesUserBar} from "./MessagesUserBar/MessagesUserBar";
import {AddItemArea} from "../../AddItemArea/AddItemArea";
import DiscordLogo from "../../../assets/c09a43a372ba81e3018c3151d4ed4773.png";

export const Messages = (props) => {
    return (
        <div className={style.messagesPage}>
            <MessagesUserBar fullName={props.dialog?.fullName ?? "User"}/>
            <div className={style.messages}>
                <MessagesList
                    messages={props.messages}
                    userAvatar={props.dialog?.photos.small || props.dialog?.photos.large || DiscordLogo}
                    authAvatar={props.profile?.photos.small || props.profile?.photos.large || DiscordLogo}
                    authId={props.authId}
                />
            </div>
            <AddItemArea
                userName={props.dialog?.fullName ?? "User"}
                value={props.value}
                textChangeAction={props.textChangeAction}
                addItemAction={props.sendMessageToUser}
                senderName={props.profile.fullName}
                authId={props.authId}
                userId={props.dialog?.userId}
            />
        </div>
    );
}
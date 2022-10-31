import {TextItem} from "../../../TextItem/TextItem";
import DiscordLogo from "../../../../assets/c09a43a372ba81e3018c3151d4ed4773.png";

export const MessagesList = ({messages, ...props}) => {

    const messagesElements = messages.map((message, index, array) => {
        let image = props.authId === message.senderId? props.authAvatar : props.userAvatar;

        if (index === 0) {
            return (
                <TextItem
                    avatar={image || DiscordLogo}
                    message={message.message}
                    name={message.name}
                    key={message.id}
                    addedDate={message.addedDate}
                />
            )
        } else {
            if (array[index - 1].senderId === message.senderId) {
                return (
                    <TextItem
                        message={message.message}
                        noUser
                        name={message.name}
                        addedDate={message.addedDate}
                        key={message.id}
                    />
                )
            } else {
                return (
                    <TextItem
                        avatar={image || DiscordLogo}
                        message={message.message}
                        name={message.name}
                        addedDate={message.addedDate}
                        key={message.id}
                    />
                )
            }
        }
    });

    return (
        <ul>
            {messagesElements}
        </ul>
    );
}
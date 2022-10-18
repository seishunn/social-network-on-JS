import {TextItem} from "../../../TextItem/TextItem";
import DiscordLogo from "../../../../assets/c09a43a372ba81e3018c3151d4ed4773.png";

export const MessagesList = ({messages, ...props}) => {
    const messagesElements = messages.map((message, index, array) => {
        if (index === 0) {
            return (
                <TextItem
                    avatar={message?.userAvatar || DiscordLogo}
                    message={message.message}
                    name={message.name}
                    key={message.id}
                />
            )
        } else {
            if (array[index - 1].myMessage === message.myMessage) {
                return (
                    <TextItem message={message.message} noUser key={message.id}/>
                )
            } else {
                return (
                    <TextItem
                        avatar={message?.userAvatar || DiscordLogo}
                        message={message.message}
                        name={message.name}
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
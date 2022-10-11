import {TextItem} from "../../../TextItem/TextItem";
import DiscordLogo from "../../../../assets/c09a43a372ba81e3018c3151d4ed4773.png";

export const MessagesList = ({messages, ...props}) => {
    return (
        <ul>
            {messages.map((message, index, array) => {
                if (index === 0) {
                    return (
                        <TextItem
                            avatar={message?.userAvatar || DiscordLogo}
                            text={message.text}
                            name={message.name}
                        />
                    )
                } else {
                    if (array[index - 1].myMessage === message.myMessage) {
                        return (
                            <TextItem text={message.text} noUser/>
                        )
                    } else {
                        return (
                            <TextItem
                                avatar={message?.userAvatar || DiscordLogo}
                                text={message.text}
                                name={message.name}
                            />
                        )
                    }
                }
            })}
        </ul>
    );
}
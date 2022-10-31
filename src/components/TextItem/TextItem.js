import style from './TextItem.module.css';
import DiscordLogo from "../../assets/c09a43a372ba81e3018c3151d4ed4773.png"

const TextItem = ({noUser, ...props}) => {
    let date;
    let time;

    if (props.addedDate) {
        date = new Date(props.addedDate);
        time = `${date.getHours()}:${date.getMinutes()}`;
    }
    if (!noUser) {
        return (
            <li key={props.id}>
                <div className={style.item}>
                    <div className={style.avatar}>
                        <img src={props?.avatar || DiscordLogo} alt=""/>
                    </div>
                    <div className={style.text}>
                        <div className={style.nameAndDate}><span
                            className={style.userName}>{props?.name || "Anonymous"}</span> <span
                            className={style.postDate}>{date ? `${date.toLocaleDateString()} ${time}` : ""}</span></div>
                        <div className={style.description}>{props.message}</div>
                    </div>
                </div>
            </li>

        );
    } else {
        return (
            <li>
                <div className={style.noUser}>
                    <div className={style.description}>{props.message}</div>
                </div>
            </li>
        )
    }
}

export {TextItem};
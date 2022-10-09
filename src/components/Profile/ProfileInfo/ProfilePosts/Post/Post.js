import style from './Post.module.css';
import DiscordLogo from "../../../../../assets/c09a43a372ba81e3018c3151d4ed4773.png"

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.avatar}>
                <img src={props?.avatar || DiscordLogo} alt=""/>
            </div>
            <div className={style.text}>
                <div className={style.nameAndDate}><span className={style.userName}>{props?.name || "Anonymous"}</span> <span className={style.postDate}>09.10.22</span></div>
                <div className={style.description}>{props.text}</div>
            </div>
        </div>
    );
}

export {Post};
import style from './Navigation.module.css';
import DiscordLogo from '../../assets/c09a43a372ba81e3018c3151d4ed4773.png'
import {Link} from "./Link/Link";

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div>
                <span className={style.title}>Discord</span>
                <Link avatar url={DiscordLogo}/>
                <Link url={'https://super.so/icon/light/message-square.svg'}/>
                <Link url={'https://super.so/icon/light/users.svg'}/>
            </div>
            <div>
                <Link url={'https://super.so/icon/light/log-out.svg'}/>
                <Link url={'https://super.so/icon/light/log-in.svg'}/>
            </div>
        </div>
    );
}
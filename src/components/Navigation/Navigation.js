import style from './Navigation.module.css';
import DiscordLogo from '../../assets/c09a43a372ba81e3018c3151d4ed4773.png'
import {NavigationItem} from "./NavigationItem/NavigationItem";

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div>
                <span className={style.title}>Discord</span>
                <NavigationItem avatar url={DiscordLogo} href={'/profile'}/>
                <NavigationItem url={'https://super.so/icon/light/message-square.svg'} href={'/dialogs'}/>
                <NavigationItem url={'https://super.so/icon/light/users.svg'} href={'/users'}/>
            </div>
            <div>
                <NavigationItem url={'https://super.so/icon/light/log-out.svg'}/>
                <NavigationItem url={'https://super.so/icon/light/log-in.svg'}/>
            </div>
        </div>
    );
}
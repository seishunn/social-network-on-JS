import style from './Navigation.module.css';
import DiscordLogo from '../../assets/c09a43a372ba81e3018c3151d4ed4773.png'
import {NavigationItem} from "./NavigationItem/NavigationItem";

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div>
                <span className={style.title}>Discord</span>
                <div className={style.navigationList}>
                    <NavigationItem avatar url={DiscordLogo} href={'/profile'}/>
                    <NavigationItem url={'https://super.so/icon/light/message-square.svg'} href={'/dialogs'}/>
                    <NavigationItem url={'https://super.so/icon/light/users.svg'} href={'/users'}/>
                </div>
            </div>
            <div>
                <div className={style.authList}>
                    <NavigationItem url={'https://super.so/icon/light/log-out.svg'} href={'/logIn'}/>
                    <NavigationItem url={'https://super.so/icon/light/log-in.svg'} href={'/logOut'}/>
                </div>
            </div>
        </div>
    );
}
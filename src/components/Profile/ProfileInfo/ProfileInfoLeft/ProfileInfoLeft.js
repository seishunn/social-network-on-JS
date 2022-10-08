import style from './ProfileInfoLeft.module.css';
import DiscordLogo from '../../../../assets/c09a43a372ba81e3018c3151d4ed4773.png'

export const ProfileInfoLeft = () => {
    return (
        <div className={style.profile}>
            <div className={style.profileBlock}>
                <div className={style.avatar}>
                    <img src={DiscordLogo} alt=""/>
                </div>
            </div>
        </div>
    );
}
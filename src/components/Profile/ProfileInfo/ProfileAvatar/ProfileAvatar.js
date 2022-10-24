import style from './ProfileAvatar.module.css';
import DiscordLogo from '../../../../assets/c09a43a372ba81e3018c3151d4ed4773.png'

export const ProfileAvatar = (props) => {
    return (
        <div className={style.profile}>
            <div className={style.profileBlock}>
                <div className={style.avatar}>
                    <img src={props.photo?.large || props.photo?.small || DiscordLogo} alt=""/>
                </div>
            </div>
        </div>
    );
}
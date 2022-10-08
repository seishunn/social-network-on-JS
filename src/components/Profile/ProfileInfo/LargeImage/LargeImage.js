import style from './LargeImage.module.css';
import DiscordLogo from '../../../../assets/c09a43a372ba81e3018c3151d4ed4773.png'

export const LargeImage = () => {
    return (
        <div className={style.largeImg}>
            <img src={DiscordLogo} alt=""/>
        </div>
    );
}
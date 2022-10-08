import style from './ProfileInfoRight.module.css';

export const ProfileInfoRight = () => {
    return (
        <div className={style.profile}>
            <div className={style.profileData}>
                <div className={style.name}>
                    <div>Anonymous</div>
                </div>
                <div className={style.status}>nothing</div>
                <div className={style.infoFooter}>
                    <ul>
                        <li>
                            <div>83</div>
                            <span>друга</span></li>
                        <li>
                            <div>92</div>
                            <span>подписчика</span></li>
                        <li>
                            <div>3</div>
                            <span>поста</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
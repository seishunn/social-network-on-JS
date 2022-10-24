import style from './ProfileDescription.module.css';

export const ProfileDescription = (props) => {
    return (
        <div className={style.profile}>
            <div className={style.profileData}>
                <div className={style.name}>
                    <div>{props.profile?.fullName || "Anonymous"}</div>
                </div>
                <div className={style.status}>{props.profile?.aboutMe || "nothing"}</div>
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
import style from './ProfileDescription.module.css';
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";

export const ProfileDescription = (props) => {
    return (
        <div className={style.profile}>
            <div className={style.profileData}>
                <div className={style.name}>
                    <div>{props.profile?.fullName || "Anonymous"}</div>
                </div>
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}
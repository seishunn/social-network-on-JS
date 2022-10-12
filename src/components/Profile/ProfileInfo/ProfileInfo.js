import {LargeImage} from "./LargeImage/LargeImage";
import style from "../Profile.module.css";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";

export const ProfileInfo = (props) => {
    return (
        <>
            <LargeImage/>
            <div className={style.profile}>
                <ProfileAvatar/>
                <ProfileDescription/>
            </div>
        </>
    );
}
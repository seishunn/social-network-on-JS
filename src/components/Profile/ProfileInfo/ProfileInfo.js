import {LargeImage} from "./LargeImage/LargeImage";
import style from "../Profile.module.css";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";

export const ProfileInfo = (props) => {
    return (
        <>
            <LargeImage photo={props.profile?.photos}/>
            <div className={style.profile}>
                <ProfileAvatar photo={props.profile?.photos}/>
                <ProfileDescription profile={props.profile}/>
            </div>
        </>
    );
}
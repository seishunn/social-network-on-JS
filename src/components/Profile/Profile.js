import style from './Profile.module.css'
import {LargeImage} from "./ProfileInfo/LargeImage/LargeImage";
import {ProfileAvatar} from "./ProfileInfo/ProfileAvatar/ProfileAvatar";
import {ProfileDescription} from "./ProfileInfo/ProfileDescription/ProfileDescription";
import {ProfilePosts} from "./ProfileInfo/ProfilePosts/ProfilePosts";

export const Profile = () => {
    return (
        <div className={style.profilePage}>
            <LargeImage/>
            <div className={style.profile}>
                <ProfileAvatar/>
                <ProfileDescription/>
            </div>
            <div className={style.createPost}>
                <ProfilePosts/>
            </div>
        </div>
    );
}
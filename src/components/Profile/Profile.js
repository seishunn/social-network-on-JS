import style from './Profile.module.css'
import {LargeImage} from "./ProfileInfo/LargeImage/LargeImage";
import {ProfileInfoLeft} from "./ProfileInfo/ProfileInfoLeft/ProfileInfoLeft";
import {ProfileInfoRight} from "./ProfileInfo/ProfileInfoRight/ProfileInfoRight";

export const Profile = () => {
    return (
        <div className={style.profilePage}>
            <LargeImage/>
            <div className={style.profile}>
                <ProfileInfoLeft/>
                <ProfileInfoRight/>
            </div>
            <div className={style.createPost}>
                {/*<ProfilePosts/>*/}
            </div>
        </div>
    );
}
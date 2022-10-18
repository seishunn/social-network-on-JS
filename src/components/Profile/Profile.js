import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePostsContainer} from "./ProfileInfo/ProfilePosts/ProfilePostsContainer";

export const Profile = ({state, ...props}) => {
    return (
        <div className={style.profilePage}>
            <ProfileInfo/>
            <ProfilePostsContainer/>
        </div>
    );
}
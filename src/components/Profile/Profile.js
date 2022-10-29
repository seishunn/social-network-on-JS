import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePostsContainer} from "./ProfileInfo/ProfilePosts/ProfilePostsContainer";

export const Profile = (props) => {
    return (
        <div className={style.profilePage}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateUserStatus}/>
            <ProfilePostsContainer/>
        </div>
    );
}
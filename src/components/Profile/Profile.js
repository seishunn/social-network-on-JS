import style from './Profile.module.css'
import {ProfilePosts} from "./ProfileInfo/ProfilePosts/ProfilePosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = ({state, ...props}) => {
    return (
        <div className={style.profilePage}>
            <ProfileInfo/>
            <ProfilePosts
                posts={state.posts}
                newPostText={state.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}
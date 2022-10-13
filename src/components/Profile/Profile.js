import style from './Profile.module.css'
import {ProfilePosts} from "./ProfileInfo/ProfilePosts/ProfilePosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

export const Profile = ({state, addPost, ...props}) => {
    return (
        <div className={style.profilePage}>
            <ProfileInfo/>
            <ProfilePosts posts={state.posts} addPost={addPost} updateNewPostText={props.updateNewPostText} newPostText={state.newPostText}/>
        </div>
    );
}
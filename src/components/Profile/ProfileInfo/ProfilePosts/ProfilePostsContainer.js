import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {ProfilePosts} from "./ProfilePosts";



export const ProfilePostsContainer = (props) => {
    let textChangeAction = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    let addItemAction = () => {
        props.dispatch(addPostActionCreator());
    }

    return (
        <ProfilePosts
            textChangeAction={textChangeAction}
            addItemAction={addItemAction}
            value={props.newPostText}
            posts={props.posts}
        />
    );
}
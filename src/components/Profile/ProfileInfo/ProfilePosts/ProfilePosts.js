import {TextItem} from "../../../TextItem/TextItem";
import style from "./ProfilePosts.module.css";
import {AddItemArea} from "../../../AddItemArea/AddItemArea";
import {updateNewPostText} from "../../../../redux/state";

export const ProfilePosts = (props) => {
    let postsElements = props.posts.map(post => <li><TextItem {...post}/></li>)

    return (
        <div className={style.createPost}>
            <AddItemArea onButtonClick={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
            <ul>
                {postsElements}
            </ul>
        </div>
    );
}
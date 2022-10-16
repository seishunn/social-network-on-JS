import {TextItem} from "../../../TextItem/TextItem";
import style from "./ProfilePosts.module.css";
import {AddItemArea} from "../../../AddItemArea/AddItemArea";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";



export const ProfilePosts = (props) => {
    let postsElements = props.posts.map(post => <li><TextItem {...post}/></li>)

    return (
        <div className={style.createPost}>
            <AddItemArea
                dispatch={props.dispatch}
                value={props.newPostText}
                textChangeAction={text => updateNewPostTextActionCreator(text)}
                addItemAction={addPostActionCreator()}
            />
            <ul>
                {postsElements}
            </ul>
        </div>
    );
}
import style from "./ProfilePosts.module.css";
import {AddItemArea} from "../../../AddItemArea/AddItemArea";
import {TextItem} from "../../../TextItem/TextItem";


export const ProfilePosts = (props) => {
    console.log(props)
    let postsElements = props.posts.map(post => <li key={post.id}><TextItem {...post}/></li>)

    return (
        <div className={style.createPost}>
            <AddItemArea
                value={props.value}
                textChangeAction={props.textChangeAction}
                addItemAction={props.addItemAction}
            />
            <ul>
                {postsElements}
            </ul>
        </div>
    );
}
import {TextItem} from "../../../TextItem/TextItem";
import style from "./ProfilePosts.module.css";

export const ProfilePosts = (props) => {
    let postsElements = props.posts.map(post => <li><TextItem {...post}/></li>)

    return (
        <div className={style.createPost}>
            <ul>
                {postsElements}
            </ul>
        </div>
    );
}
import style from "./ProfilePosts.module.css";
import {AddItemArea} from "../../../AddItemArea/AddItemArea";
import {TextItem} from "../../../TextItem/TextItem";
import {reduxForm} from "redux-form";

const PostsForm = (props) => {
    const onSubmit = (formData) => {
        props.addItemAction(formData.post)
        formData.post = "";
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)}>
            <AddItemArea
                value={props.value}
                textChangeAction={props.textChangeAction}
                addItemAction={props.addItemAction}
                name={"post"}
            />
        </form>
    )
}

const PostsReduxForm = reduxForm({
    form: "posts"
})(PostsForm)

export const ProfilePosts = (props) => {
    let postsElements = props.posts.map(post => <TextItem {...post} avatar={props.profile.photos.small} key={post.id}/>)

    return (
        <div className={style.createPost}>
            <PostsReduxForm
                addItemAction={props.addItemAction}
            />
            <ul>
                {postsElements}
            </ul>
        </div>
    );
}
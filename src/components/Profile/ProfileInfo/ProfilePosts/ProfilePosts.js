import {Post} from "./Post/Post";

export const ProfilePosts = () => {
    return (
        <div>
            <Post text={"Привет, React"}/>
            <Post text={"Привет, JS"}/>
            <Post text={"Привет, bundle.js"}/>
            <Post text={"Привет, props"}/>
        </div>
    );
}
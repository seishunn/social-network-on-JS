import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {ProfilePosts} from "./ProfilePosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newPostText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        textChangeAction: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addItemAction: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export {ProfilePostsContainer}
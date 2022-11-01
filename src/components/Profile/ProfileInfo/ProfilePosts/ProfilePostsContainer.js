import {addPostActionCreator} from "../../../../redux/profile-reducer";
import {ProfilePosts} from "./ProfilePosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
};

const ProfilePostsContainer = connect(mapStateToProps, {
    addItemAction: addPostActionCreator
})(ProfilePosts);

export {ProfilePostsContainer}
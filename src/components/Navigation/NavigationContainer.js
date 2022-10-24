import {Navigation} from "./Navigation";
import {connect} from "react-redux";

const NavigationContainer = (props) => {
    return (
        <Navigation {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        photo: state.profilePage.profile?.photos
    }
}

export default connect(mapStateToProps, {})(NavigationContainer)
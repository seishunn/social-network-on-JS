import React, {Component} from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return (
                    <Navigate to={'/login'}/>
                )
            } else {
                return (
                    <Component {...this.props}/>
                )
            }
        }
    }

    return connect(mapStateToProps, {})(RedirectComponent)
}
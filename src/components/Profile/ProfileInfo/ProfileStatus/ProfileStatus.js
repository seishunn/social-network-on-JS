import style from "../ProfileDescription/ProfileDescription.module.css";
import React from "react";

export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (status) => {
        this.setState({
            status: status
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div
                        className={style.status}
                        onDoubleClick={this.activateEditMode}
                    >{this.state.status || "nothing"}</div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            type="text"
                            value={this.state.status}
                            onBlur={this.deactivateEditMode}
                            onChange={e => this.onStatusChange(e.target.value)}
                            autoFocus={true}
                        />
                    </div>
                }
            </>
        )
    }
}
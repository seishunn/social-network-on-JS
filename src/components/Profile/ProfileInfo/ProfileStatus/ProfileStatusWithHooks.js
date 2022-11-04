import style from "../ProfileDescription/ProfileDescription.module.css";
import React, {useEffect, useState} from "react";

export const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (newStatus) => {
        setStatus(newStatus);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    return (
        <>
            {!editMode &&
                <div
                    className={style.status}
                    onDoubleClick={activateEditMode}
                >{props.status || "nothing"}</div>
            }
            {editMode &&
                <div>
                    <input
                        type="text"
                        value={status}
                        autoFocus={true}
                        onChange={e => onStatusChange(e.target.value)}
                        onBlur={deactivateEditMode}
                    />
                </div>
            }
        </>
    )
}
import style from "./Dialogs.module.css";
import {DialogItems} from "./DialogItems/DialogItems";
import {Dialog} from "./Dialog/Dialog";
import {MessagesContainer} from "./Messages/MessagesContainer";
import {Navigate} from "react-router-dom";

export const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <li key={dialog.id}><Dialog {...dialog}/></li>);

    if (!props.isAuth) {
        return (
            <Navigate to={'/login'}/>
        )
    }

    return (
        <div className={style.dialogsPage}>
            <div className={style.dialogsSideBar}>
                <DialogItems dialogs={dialogsElements}/>
            </div>
            <MessagesContainer/>
        </div>
    );
}
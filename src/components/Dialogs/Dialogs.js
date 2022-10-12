import style from "./Dialogs.module.css";
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";
import {Dialog} from "./Dialog/Dialog";

export const Dialogs = ({state, ...props}) => {
    let dialogsElements = state.dialogs.map(dialog => <li><Dialog {...dialog}/></li>);

    return (
        <div className={style.dialogsPage}>
            <div className={style.dialogsSideBar}>
                <DialogItems dialogs={dialogsElements}/>
            </div>
            <Messages messages={state.messages}/>
        </div>
    );
}
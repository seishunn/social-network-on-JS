import style from "./Dialogs.module.css";
import {DialogItems} from "./DialogItems/DialogItems";
import {Dialog} from "./Dialog/Dialog";
import {MessagesContainer} from "./Messages/MessagesContainer";
import {WithoutMessages} from "./Messages/NoMessages/WithoutMessages";

export const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <li key={dialog.id}><Dialog {...dialog}/></li>);

    return (
        <div className={style.dialogsPage}>
            <div className={style.dialogsSideBar}>
                <DialogItems dialogs={dialogsElements}/>
            </div>
            {
                !props.params.id? <WithoutMessages/>:<MessagesContainer/>
            }
        </div>
    );
}
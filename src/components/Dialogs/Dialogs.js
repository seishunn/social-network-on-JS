import style from "./Dialogs.module.css";
import {DialogItems} from "./DialogItems/DialogItems";
import {Dialog} from "./Dialog/Dialog";
import {MessagesContainer} from "./Messages/MessagesContainer";
import {WithoutMessages} from "./Messages/NoMessages/WithoutMessages";

export const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <li key={dialog.id}><Dialog {...dialog}/></li>);
    return (
        <div className={style.dialogsPage}>
            <div className={style.dialogsSideBar + ` ` + (!props.params.id? style.visibleDialogsSideBar : style.hiddenDialogsSideBar)}>
                <DialogItems dialogs={dialogsElements}/>
            </div>
            <div className={style.messagesPage + ` ` + (!props.params.id? style.hiddenMessagePage : style.visibleMessagePage)}>
                {
                    !props.params.id ? <WithoutMessages/> : <MessagesContainer/>
                }
            </div>
        </div>
    );
}
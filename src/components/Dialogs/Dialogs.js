import style from "./Dialogs.module.css";
import {DialogItems} from "./DialogItems/DialogItems";
import {Dialog} from "./Dialog/Dialog";
import {MessagesContainer} from "./Messages/MessagesContainer";

export const Dialogs = ({state, ...props}) => {
    let dialogsElements = state.dialogs.map(dialog => <li><Dialog {...dialog}/></li>);

    return (
        <div className={style.dialogsPage}>
            <div className={style.dialogsSideBar}>
                <DialogItems dialogs={dialogsElements}/>
            </div>
            <MessagesContainer
                state={state}
                dispatch={props.dispatch}
            />
        </div>
    );
}
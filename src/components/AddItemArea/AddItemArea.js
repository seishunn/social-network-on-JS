import style from "./AddItemArea.module.css";
import {updateNewPostText} from "../../redux/state";

export const AddItemArea = ({userName, onButtonClick, ...props}) => {
    let onPostChange = (text) => {
        props.updateNewPostText(text)
    }
    let addPost = () => {
        onButtonClick()
    }
    return (
        <div className={style.addItemInput}>
            <div className={style.scrollBar}>
                <div className={style.textArea}>
                    <div>
                        <textarea
                            // ref={newPostElement}
                            placeholder={userName ? `Написать @${userName}` : "Добавить пост"}
                            value={props.newPostText}
                            onChange={e => onPostChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className={style.btnAdd}>
                    <div onClick={addPost}>+</div>
                </div>
            </div>
        </div>
    );
}
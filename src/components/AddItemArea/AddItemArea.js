import style from "./AddItemArea.module.css";

export const AddItemArea = ({userName, dispatch, value, ...props}) => {
    let textChange = (text) => {
        dispatch(props.textChangeAction(text));
    }
    let addItem = () => {
        dispatch(props.addItemAction);
    }
    return (
        <div className={style.addItemInput}>
            <div className={style.scrollBar}>
                <div className={style.textArea}>
                    <div>
                        <textarea
                            placeholder={userName ? `Написать @${userName}` : "Добавить пост"}
                            value={value}
                            onChange={e => textChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className={style.btnAdd}>
                    <div onClick={addItem}>+</div>
                </div>
            </div>
        </div>
    );
}
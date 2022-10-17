import style from "./AddItemArea.module.css";

export const AddItemArea = ({userName, value, textChangeAction, addItemAction, ...props}) => {
    let textChange = (text) => {
        textChangeAction(text);
    }
    let addItem = () => {
        addItemAction();
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
import style from "./AddItemArea.module.css";
import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);

export const AddItemArea = (props) => {
    return (
        <div className={style.addItemInput}>
            <div className={style.scrollBar}>
                <div className={style.textArea}>
                    <Field
                        validate={[required, maxLength100]}
                        component={Textarea}
                        name={props.name}
                        placeholder={props.userName ? `Написать @${props.userName ?? "User"}` : "Добавить пост"}
                        value={props.value}
                    />
                </div>
                <button className={style.btnAdd}>
                    <div>+</div>
                </button>
            </div>
        </div>
    );
}
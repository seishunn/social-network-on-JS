import style from "./InputBlock.module.css"
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";

export const InputBlock = (props) => {
    return (
        <div className={style.inputBlock}>
            <label>{props.label}
                <div className={style.inputWrapper}>
                    <Field
                        type={props.type}
                        component={Input}
                        name={props.name}
                        validate={[required]}
                    />
                </div>
            </label>
        </div>
    )
}
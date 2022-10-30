import style from "./InputBlock.module.css"
import {Field} from "redux-form";

export const InputBlock = (props) => {
    return (
        <div className={style.inputBlock}>
            <label>{props.label}
                <div className={style.inputWrapper}>
                    <Field type={props.type} component={"input"} name={props.name}/>
                </div>
            </label>
        </div>
    )
}
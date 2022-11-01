import style from "./FormsControls.module.css";

const FormControls = ({input, meta, children, ...props}) => {
    let isError = meta.error && meta.touched || meta.error && meta.active;

    return (
        <div className={style.formControl}>
            {children}
            {isError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) => {
    return (
        <FormControls input={input} meta={meta}>
            <textarea {...input} {...props}/>
        </FormControls>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <FormControls input={input} meta={meta}>
            <input {...input} {...props}/>
        </FormControls>
    )
}
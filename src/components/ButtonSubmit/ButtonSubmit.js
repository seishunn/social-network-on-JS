import style from "./ButtonSubmit.module.css";

export const ButtonSubmit = (props) => {
    return (
        <button className={style.submit}>{props.children}</button>
    )
}
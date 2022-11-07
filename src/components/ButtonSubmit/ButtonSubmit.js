import style from "./ButtonSubmit.module.css";

export const ButtonSubmit = ({onClick, ...props}) => {
    return (
        <button className={style.submit} onClick={onClick}>{props.children}</button>
    )
}
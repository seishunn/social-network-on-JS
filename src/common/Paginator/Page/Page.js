import style from "./Page.module.css";

export const Page = (props) => {
    return (
        <div
            key={props.page}
            className={style.page + ' ' + (props.currentPage === props.page ? style.active : '')}
            onClick={() => props.pageChanged(props.page)}
        >{props.page}</div>
    )
}
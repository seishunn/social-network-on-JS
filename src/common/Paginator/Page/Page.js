import style from "./Page.module.css";
import React from "react";

export const Page = ({onClick, ...props}) => {
    return (
        <div
            key={props.page}
            className={style.page + ' ' + (props.currentPage === props.page ? style.active : '')}
            onClick={() => {
                props.pageChanged(props.page);
                if (onClick) {
                    onClick();
                }
            }}
        >{props.page}</div>
    )
}
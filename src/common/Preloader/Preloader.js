import React from "react";
import style from './Preloader.module.css'

export const Preloader = (props) => {
    return (
        <div className={style.preloaderBlock}>
            <div>
                <div className={style.preloader}>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </div>
                <div className={style.loaderText}>Немного подождите</div>
            </div>
        </div>
    )
}
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export const Dialog = ({name, href, ...props}) => {
    return (
        <NavLink to={href || ''} className={style.dialog}>
            <div className={style.avatar}>
                <img src="https://i.pinimg.com/originals/96/5f/53/965f53b4c0bb836ff10cec9692c04aa8.jpg" alt=""/>
            </div>
            <div className={style.name}>
                {name}
            </div>
        </NavLink>
    );
}
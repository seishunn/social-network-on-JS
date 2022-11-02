import style from './NavigationItem.module.css';
import {NavLink} from "react-router-dom";

export const NavigationIndicator = ({url, ...props}) => {
    return (
        <>
            <span className={style.activeLinkIndicator}/>
            <div className={style.itemImage}>
                <img src={url} alt=""/>
            </div>
        </>
    )
}

export const NavigationItem = ({url, avatar, href, onClick, ...props}) => {
    const getClasses = (isActive, isPending) => {
        const classes = [style.link];

        if (avatar) {
            classes.push(style.avatarLink);
        } else {
            classes.push(style.usualLink)
        }

        if (isActive) {
            classes.push(style.active)
        } else {
            classes.push(style.noactive)
        }

        if (props.redLink) {
            classes.push(style.redLink)
        }

        return classes.join(" ");
    }

    return (
        <NavLink className={({isActive, isPending}) => getClasses(isActive, isPending)} to={href} onClick={onClick}>
             <NavigationIndicator url={url} className={style.active}/>
        </NavLink>
    );
}
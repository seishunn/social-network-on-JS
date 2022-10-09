import style from './NavigationItem.module.css';
import {Link} from "react-router-dom";

export const NavigationIndicator = ({url, ...props}) => {
    return (
        <>
            <span className={style.activeLink}/>
            <div>
                <img src={url} alt=""/>
            </div>
        </>
    )
}

export const NavigationItem = ({url, avatar, href, ...props}) => {
    const classes = [style.link];

    if (avatar) {
        classes.push(style.largeLink);
    } else {
        classes.push(style.usualLink)
    }
    return (
        <Link className={classes.join(" ")} to={href}>
             <NavigationIndicator url={url}/>
        </Link>
    );
}
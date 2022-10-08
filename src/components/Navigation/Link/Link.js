import style from './Link.module.css';

export const LinkButton = ({url, ...props}) => {
    return (
        <>
            <span className={style.activeLink}/>
            <div>
                <img src={url} alt=""/>
            </div>
        </>
    )
}

export const Link = ({url, avatar, ...props}) => {
    const classes = [style.link];

    if (avatar) {
        classes.push(style.largeLink);
    } else {
        classes.push(style.usualLink)
    }

    return (
        <div className={classes.join(" ")} {...props}>
            <LinkButton url={url}/>
        </div>
    );
}
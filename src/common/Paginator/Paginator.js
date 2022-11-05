import style from "./Paginator.module.css";
import {Page} from "./Page/Page";

export const Paginator = ({totalUsersCount, pageSize, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.pages}>
            {pages.map(page => (
                <Page
                    key={page}
                    page={page}
                    currentPage={props.currentPage}
                    changeCurrentPage={props.changeCurrentPage}
                    pageChanged={props.pageChanged}
                />
            ))}
        </div>
    )
}
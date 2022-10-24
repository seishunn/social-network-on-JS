import style from "./Paginator.module.css";
import {Page} from "./Page/Page";

export const Paginator = (props) => {
    return (
        <div className={style.pages}>
            {props.pagesSize.map(page => (
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
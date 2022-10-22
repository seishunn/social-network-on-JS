import style from "./Paginator.module.css";
import {Page} from "./Page/Page";

export const Paginator = (props) => {
    return (
        <div className={style.pages}>
            {/*{pages*/}
            {/*    .filter(page => page >= leftPortionNumber && page <= rightPortionNumber)*/}
            {/*    .map(page => {*/}
            {/*        return (*/}
            {/*            <Page page={page} changePage={changePage} currentPage={props.currentPage}/>*/}
            {/*        )*/}
            {/*    })}*/}
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
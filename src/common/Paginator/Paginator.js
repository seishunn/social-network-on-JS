import style from "./Paginator.module.css";
import {Page} from "./Page/Page";
import {useState} from "react";

export const Paginator = ({totalItemsCount, pageSize, portionSize = 30, ...props}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={style.pages}>
            {leftPortionNumber > 1 &&
                <button
                    className={style.changePage + ' ' + style.leftPage}
                    onClick={() => setPortionNumber(portionNumber - 1)}
                >Предыдущая страница</button>}
            {pages
                .filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
                .map(page => (
                    <Page
                        key={page}
                        page={page}
                        currentPage={props.currentPage}
                        changeCurrentPage={props.changeCurrentPage}
                        pageChanged={props.pageChanged}
                    />
                ))}
            {portionCount > portionNumber &&
                <button
                    className={style.changePage + ' ' + style.rightPage}
                    onClick={() => setPortionNumber(portionNumber + 1)}
                >Следующая страница</button>
            }
        </div>
    )
}
import React, {useState} from "react";
import style from "./Paginator.module.css";
const {Page} = require("./Page/Page");

type PropsType = {
    currentPage: number
    pageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({currentPage,
                                                   pageChanged,
                                                   totalItemsCount,
                                                   pageSize,
                                                   portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount: number = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={style.pagesWrapper}>

            <div className={style.pages}>
                {leftPortionNumber > 1 &&
                    <>
                        <button
                            className={style.changePage + ' ' + style.leftPage}
                            onClick={() => setPortionNumber(portionNumber - 1)}
                        >Prev
                        </button>
                        <Page
                            key={1}
                            page={1}
                            currentPage={currentPage}
                            pageChanged={pageChanged}
                            onClick={() => setPortionNumber(1)}
                        />
                        <div className={style.spread}>...</div>
                    </>
                }
                {pages
                    .filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
                    .map(page => (
                        <Page
                            key={page}
                            page={page}
                            currentPage={currentPage}
                            pageChanged={pageChanged}
                        />
                    ))}
                {portionCount > portionNumber &&
                    <>
                        <div className={style.spread}>...</div>
                        <Page
                            key={pagesCount}
                            page={pagesCount}
                            currentPage={currentPage}
                            pageChanged={pageChanged}
                            onClick={() => setPortionNumber(portionCount)}
                        />
                        <button
                            className={style.changePage + ' ' + style.rightPage}
                            onClick={() => setPortionNumber(portionNumber + 1)}
                        >Next
                        </button>
                    </>
                }
            </div>
        </div>
    )
}

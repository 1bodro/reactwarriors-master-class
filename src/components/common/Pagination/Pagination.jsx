import React, {useState} from "react";
import s from "./Pagination.module.scss";
import cn from "classnames";

export const Pagination = props => {
    const {onPageChanged, pagesCount, currentPage } = props;
    let paginationNumbers = [];
    for (let i =1; i<=pagesCount; i++) paginationNumbers.push(i);

    const [portionNumber, setPortionNumber] = useState(1);
    const portionSize = 5;
    const portionCount = Math.ceil(pagesCount/portionSize);
    const leftPortionPageNumber = (portionNumber - 1)*portionSize +1;
    const rightPortionPageNumber = portionNumber*portionSize;

    const changePortionNumber = (limitPageNumber, delta) => {
        limitPageNumber === currentPage && setPortionNumber(portionNumber + delta);
        onPageChanged(currentPage + delta);
    }

    const filterPagination = number => (number >= leftPortionPageNumber && number <= rightPortionPageNumber);

    return (
        <div className={s.container}>
            { portionNumber > 1 &&
            <button className={`${s.btn} ${s.btnPrev}`}  onClick={() => changePortionNumber(leftPortionPageNumber, -1)}/> }

            { paginationNumbers
                .filter(paginationNumber => filterPagination(paginationNumber))
                .map(paginationNumber => {
                        return (
                            <span
                                key={paginationNumber}
                                onClick={() => {
                                    onPageChanged(paginationNumber)
                                }}
                                className={cn(s.page, {[s['page__active']]: paginationNumber === currentPage})}>
                            {paginationNumber}
                        </span>
                        )
                    }
                )
            }

            { portionCount > portionNumber && <button className={`${s.btn} ${s.btnNext}`} onClick={() => changePortionNumber(rightPortionPageNumber, 1)}/> }

        </div>
    )
}
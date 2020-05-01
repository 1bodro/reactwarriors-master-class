import React from "react";
import s from "./Pagination.module.scss";

export const Pagination = props => {
    const {onPageChanged, pagesCount, currentPage } = props;
    let paginationNumbers = [];


    for (let i =1; i<=pagesCount; i++) paginationNumbers.push(i);

    return (
        <div className={s.container}>
            {paginationNumbers.map(paginationNumber => {
                    return (
                        <span
                            key={paginationNumber}
                            onClick={ e => {onPageChanged(paginationNumber)}}
                            className={`${s.page} ${(paginationNumber===currentPage)? s['page__active'] : ''}`}>
                            {paginationNumber}
                        </span>
                    )
                }
            )
            }
        </div>
    )
}
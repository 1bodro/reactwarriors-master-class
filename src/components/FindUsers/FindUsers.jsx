import React from "react";
import s from "./FindUsers.module.scss";
import { User } from "./User/User";
import {Pagination} from "../Pagination/Pagination";
import {Preloader} from "../Preloader/Preloader";

export const FindUsers = props => {
    const {users, follow, unFollow, totalUsersCount, pageSize, currentPage, onPageChanged, isLoading} = props;
const pagesCount =Math.ceil(totalUsersCount/pageSize);

return (
<div className={s.container}>
    {isLoading
        ? <Preloader/>
        : <div className={`${s.users} customScrollbar`}>
            {users.map(user => (
                <User key={user.id} user={user} follow={follow} unFollow={unFollow}/>
            ))}
        </div>}
    <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged}/>
</div>
)
}
import React from "react";
import s from "./FindUsers.module.scss";
import { User } from "./User/User";
import {Pagination} from "../common/Pagination/Pagination";
import {Preloader} from "../Preloader/Preloader";

export const FindUsers = props => {
    const {users,
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        isLoading,
        followingInProgress,
        toggleFollowing,
        } = props;

const pagesCount =Math.ceil(totalUsersCount/pageSize);

return (
<div className={s.container}>
    {isLoading
        ? <Preloader/>
        : <div className={`${s.users} customScrollbar`}>
            {users.map(user => (
                <User key={user.id} user={user} toggleFollowing={toggleFollowing} followingInProgress={followingInProgress}/>
            ))}
        </div>}
    <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged}/>
</div>
)
}
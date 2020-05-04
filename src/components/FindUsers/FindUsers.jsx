import React from "react";
import s from "./FindUsers.module.scss";
import { User } from "./User/User";
import {Pagination} from "../Pagination/Pagination";
import {Preloader} from "../Preloader/Preloader";

export const FindUsers = props => {
    const {users,
        follow,
        unFollow,
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        isLoading,
        toggleFollowingInProgress,
        followingInProgress,
        toggleFollowing,
        getUsersThunkCreator} = props;

const pagesCount =Math.ceil(totalUsersCount/pageSize);

return (
<div className={s.container}>
    {isLoading
        ? <Preloader/>
        : <div className={`${s.users} customScrollbar`}>
            {users.map(user => (
                <User key={user.id} user={user} getUsersThunkCreator={getUsersThunkCreator} toggleFollowing={toggleFollowing} follow={follow} unFollow={unFollow} toggleFollowingInProgress={toggleFollowingInProgress} followingInProgress={followingInProgress}/>
            ))}
        </div>}
    <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged}/>
</div>
)
}
import React from 'react';
import './Start.css';
import AddPost from "./AddPost/AddPost";
import Posts from "./AddPost/Posts";

const Start = () => {

    return (
        <div className={'lent__container'}>
            <AddPost />
            <div className={'post__list'}>
                <Posts />
            </div>
        </div>
    );
};

export default Start;
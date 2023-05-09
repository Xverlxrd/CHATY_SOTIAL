import React from 'react';
import './Start.css';
import AddPost from "./AddPost/AddPost";
import Posts from "./AddPost/Posts";

const Start = () => {

    return (
        <div className={'lent__container'}>
            <AddPost />
            <Posts />
        </div>
    );
};

export default Start;
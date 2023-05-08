import React, {FC} from 'react';
import './Start.css';
import AddPost from "./AddPost/AddPost";
import {IPost} from "../../../Types";
import Posts from "./AddPost/Posts";

const Start:FC = () => {
    const [posts, setPosts] = React.useState<IPost[]>([

    ])
    return (
        <div className={'lent__container'}>
            <AddPost setPosts={setPosts}/>
            <Posts posts={posts}/>
        </div>
    );
};

export default Start;
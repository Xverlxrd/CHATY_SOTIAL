import React, {FC} from 'react';
import './Start.css';
import AddPost from "./AddPost/AddPost";
import {IPost} from "../../../Types";
import Posts from "./AddPost/Posts";
import friends from "../../../img/friends.png";

const Start:FC = () => {
    const [posts, setPosts] = React.useState<IPost[]>([
        {
            author: {
                _id: 'qddq',
                avatar: friends,
                name: 'Константин'
            },
            content: 'My test Post',
            createdData: '5 минут назад',
            img: [friends, friends, friends]
        }
    ])
    return (
        <div className={'lent__container'}>
            <AddPost setPosts={setPosts}/>
            <Posts posts={posts}/>
        </div>
    );
};

export default Start;
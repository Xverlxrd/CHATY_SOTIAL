import React, {FC} from 'react';
import { Icon } from '@iconify/react';
import {IPost, TypeSetState} from "../../../../Types";
import {users} from "../../../UI/SideBar/dataSideBar";

interface addPost{
    setPosts: TypeSetState<IPost[]>,
}

const AddPost:FC<addPost> = ({setPosts}) => {
    const [text, setText] = React.useState<string>('')
    const addPost = () =>{
        setPosts(prev => [
            ...prev,
            {
                author: users[0],
                content: text,
                createdData: '5 мин назад',
            }
        ])
    }

    return (
        <div className={'post__form'}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyPress={addPost}
                placeholder={'Создайте новый пост!'}
                className={'post__form_input'}/>

            <div className={'post__form_btns'}>
                <Icon className={'post__form_btn'} icon="material-symbols:add-a-photo" />
                <Icon className={'post__form_btn'} icon="carbon:music-add" />
                <Icon className={'post__form_btn'} icon="iconoir:add-media-video" />
            </div>
        </div>
    );
};

export default AddPost;
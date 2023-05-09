import React, {FC, KeyboardEvent} from 'react';
import {Icon} from '@iconify/react';
import {IPost, TypeSetState} from "../../../../Types";
import {collection, addDoc} from 'firebase/firestore';
import {useAuth} from "../../../UI/Provider/useAuth"

interface addPost {
    setPosts: TypeSetState<IPost[]>,
}

const AddPost: FC = () => {
    const [text, setText] = React.useState<string>('')
    const {user, base} = useAuth()
    const addPost = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && user) {
            try{
                const docRef = await addDoc(collection(base, 'posts'), {
                    author: user,
                    content: text,
                    createdDate: Date.now()
                })
                console.log(docRef)
            } catch (e: any){

            }
            setText('');

        }
    }

    return (
        <div className={'post__form'}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyUp={addPost}
                placeholder={'Создайте новый пост!'}
                className={'post__form_input'}/>

            <div className={'post__form_btns'}>
                <Icon className={'post__form_btn'} icon="material-symbols:add-a-photo"/>
                <Icon className={'post__form_btn'} icon="carbon:music-add"/>
                <Icon className={'post__form_btn'} icon="iconoir:add-media-video"/>
            </div>
        </div>
    );
};

export default AddPost;
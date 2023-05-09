import React, {FC} from 'react';
import {IPost} from "../../../../Types";
import {Link} from "react-router-dom";
import './Posts.css';
import {useAuth} from "../../../UI/Provider/useAuth";
import {onSnapshot, doc, collection} from 'firebase/firestore'

interface IPosts {
    posts: IPost[]
}


const Posts: FC = () => {
    const {base} = useAuth()
    const [posts, setPosts] = React.useState<IPost[]>([

    ])

    React.useEffect(() => {
        const unsub = onSnapshot(collection(base, 'posts', ), doc => {
            const arr:IPost[] = []
            doc.forEach((d:any) => {
                arr.push(d.data())
            })
            setPosts(arr.sort((a,b) => parseInt(a.createdData) - parseInt(b.createdData)))
        })

        return () => {
            unsub()
        }
    }, [])

    return (
        <>
            {posts.map(post => (
                <div key={post.createdData} className={'post__item'}>
                    <Link to={`/profile/${post.author._id}`}>
                        <li className={'post__item_container'}>
                            <div className={'post__item_logo'}>
                                <img src={post.author.avatar} alt={'Friend logo'} className={'post__item_img'}/>
                            </div>

                            <div className={'post__item_text'}>
                                <h1 className={'post__item_name'}>{post.author.name}</h1>
                                <p className={'z'}>{post.createdData}</p>
                            </div>
                        </li>
                    </Link>

                    <p className={'post__item_content'}>
                        {post.content}
                    </p>

                    {post.img && (
                        <div className={'img__list'}>
                            {post.img.map(img => (
                                <img className={'post__item_image'} src={img} alt={'Post img'} key={img}/>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default Posts;
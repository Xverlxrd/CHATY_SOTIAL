import React, {FC} from 'react';
import './SideBar.css';
import friends from "../../../img/friends.png";
import {Link} from "react-router-dom";
const users = [
    {
        _id: '123e',
        avatar: friends,
        name: 'Ernest Gillroy'
    },
    {
        _id: '12qw3e',
        avatar: friends,
        name: 'Marina Joe'
    },
    {
        _id: '1zx23e',
        avatar: friends,
        name: 'Konstantin Tur'
    },
    {
        _id: '12brt3e',
        avatar: friends,
        name: 'Bob Riks'
    },
]

const UserItems:FC = () => {
    return (
        <ul className={'sidebar__friends_list'}>
            {users.map(user => (
                <Link to={`/profile/${user._id}`} key={user._id}>
                    <li className={'sidebar__friends_item friends__item'}>
                        <div className={'friends__item_logo'}>
                            <img src={user.avatar} alt={'Friend logo'} className={'friends__item_img'}/>
                        </div>

                        <h1  className={'friends__item_name'}>{user.name}</h1>
                    </li>
                </Link>
            ))}
            {/*<li className={'sidebar__friends_item friends__item'}>*/}
            {/*    <div className={'friends__item_logo'}>*/}
            {/*        <img className={'friends__item_img'} src={friends} alt={'Friend Logo'}/>*/}
            {/*    </div>*/}

            {/*    <h1 className={'friends__item_name'}>Ernest Gillroy</h1>*/}
            {/*</li>*/}

            {/*<li className={'sidebar__friends_item friends__item'}>*/}
            {/*    <div className={'friends__item_logo'}>*/}
            {/*        <img className={'friends__item_img'} src={friends} alt={'Friend Logo'}/>*/}
            {/*    </div>*/}

            {/*    <h1 className={'friends__item_name'}>Marina Joe</h1>*/}
            {/*</li>*/}

            {/*<li className={'sidebar__friends_item friends__item'}>*/}
            {/*    <div className={'friends__item_logo'}>*/}
            {/*        <img className={'friends__item_img'} src={friends} alt={'Friend Logo'}/>*/}
            {/*    </div>*/}

            {/*    <h1 className={'friends__item_name'}>Konstantin</h1>*/}
            {/*</li>*/}

            {/*<li className={'sidebar__friends_item friends__item'}>*/}
            {/*    <div className={'friends__item_logo'}>*/}
            {/*        <img className={'friends__item_img'} src={friends} alt={'Friend Logo'}/>*/}
            {/*    </div>*/}

            {/*    <h1 className={'friends__item_name'}>Bob Riks</h1>*/}
            {/*</li>*/}
        </ul>
    );
};

export default UserItems;
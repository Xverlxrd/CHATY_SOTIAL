import React, {FC} from 'react';
import './SideBar.css';
import {Link} from "react-router-dom";
import {users} from "./dataSideBar";




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
        </ul>
    );
};

export default UserItems;
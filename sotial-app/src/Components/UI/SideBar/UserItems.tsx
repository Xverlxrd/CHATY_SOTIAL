import React from 'react';
import './SideBar.css';
import friends from "../../../img/friends.png";
const UserItems = () => {
    return (
        <ul className={'sidebar__friends_list'}>
            <li className={'sidebar__friends_item friends__item'}>
                <div className={'friends__item_logo'}>
                    <img className={'friends__item_img'} src={friends} alt={'Friend Logo'}/>
                </div>

                <h1 className={'friends__item_name'}>Ernest Gillroy</h1>
            </li>

            <li className={'sidebar__friends_item friends__item'}>
                <div className={'friends__item_logo'}>
                    <img className={'friends__item_img'} src={friends} alt={'Friend Logo'}/>
                </div>

                <h1 className={'friends__item_name'}>Ernest Gillroy</h1>
            </li>

            <li className={'sidebar__friends_item friends__item'}>
                <div className={'friends__item_logo'}>
                    <img className={'friends__item_img'} src={friends} alt={'Friend Logo'}/>
                </div>

                <h1 className={'friends__item_name'}>Ernest Gillroy</h1>
            </li>

            <li className={'sidebar__friends_item friends__item'}>
                <div className={'friends__item_logo'}>
                    <img className={'friends__item_img'} src={friends} alt={'Friend Logo'}/>
                </div>

                <h1 className={'friends__item_name'}>Ernest Gillroy</h1>
            </li>
        </ul>
    );
};

export default UserItems;
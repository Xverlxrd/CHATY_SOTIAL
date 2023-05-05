import React from 'react';
import './SideBar.css';

import UserItems from "./UserItems";

const SideBar = () => {
    return (
        <div className={'sidebar__container'}>
            <UserItems/>

            <ul className={'sidebar__nav_list'}>
                <li className={'sidebar__nav_item nav__item'}>
                    <h1 className={'nav__item_title'}>Моя страница</h1>
                </li>
                <li className={'sidebar__nav_item'}>
                    <h1 className={'nav__item_title'}>Друзья</h1>
                </li>
                <li className={'sidebar__nav_item'}>
                    <h1 className={'nav__item_title'}>Новости</h1>
                </li>
                <li className={'sidebar__nav_item'}>
                    <h1 className={'nav__item_title'}>Фотографии</h1>
                </li>
                <li className={'sidebar__nav_item'}>
                    <h1 className={'nav__item_title'}>Видео</h1>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
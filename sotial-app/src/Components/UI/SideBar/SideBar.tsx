import React, {FC} from 'react';
import './SideBar.css';

import UserItems from "./UserItems";
import Nav from "./Nav";

const SideBar:FC = () => {
    return (
        <div className={'sidebar__container'}>
            <UserItems/>
            <Nav/>
        </div>
    );
};

export default SideBar;
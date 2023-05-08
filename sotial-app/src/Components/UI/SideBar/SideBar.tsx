import React, {FC} from 'react';
import './SideBar.css';

import UserItems from "./UserItems";
import Nav from "./Nav";
import LogOut from "./LogOut";
import {useAuth} from "../Provider/useAuth";

const SideBar: FC = () => {
    return (
        <div className={'sidebar__container'}>
            <UserItems/>
            <Nav/>
            <LogOut/>
        </div>
    );
};

export default SideBar;
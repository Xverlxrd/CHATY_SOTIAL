import React from 'react';
import {nav} from "./dataNav";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className={'sidebar__nav_list'}>
            {nav.map(item => (
                <li key={item.title} className={'sidebar__nav_item nav__item'}>
                    <Link  to={item.link}>
                        <h1 className={'nav__item_title'}>{item.title}</h1>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Nav;
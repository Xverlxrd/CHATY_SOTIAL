import React from 'react';
import './Header.css'
import logo from '../../../img/Logo.png';
import profile from '../../../img/profile.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header__component'}>
            <div className={'header__container'}>
                <img src={logo} alt={'Logo'}/>
                <Link to={'/profile'}>
                    <img src={profile} alt={'Profile'}/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
import React, {FC} from 'react';
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import './Loy.css';
import {useAuth} from "../Provider/useAuth";

type LoyProps = {
    children: any;
}
const Loy:FC<LoyProps> = ({children}) => {
    const {user} = useAuth()
    return (
        <div className={'page__container'}>
            {user && (
                <>
                    <Header/>
                    <div className={'content__container'}>
                        <SideBar/>
                        {children}
                    </div>
                </>
            )}
            {!user && (
                <div className={'content__container_notuser'}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Loy;
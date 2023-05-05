import React, {FC} from 'react';
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import './Loy.css';

type LoyProps = {
    children: any;
}
const Loy:FC<LoyProps> = ({children}) => {
    return (
        <div className={'page__container'}>
            <Header/>
            <div className={'content__container'}>
                <SideBar/>
                {children}
            </div>
        </div>
    );
};

export default Loy;
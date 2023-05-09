import React, {FC} from 'react';
import './Profile.css';
import {useAuth} from "../../UI/Provider/useAuth";

const Profile:FC = () => {
    const {user} = useAuth();
    return (
        <div className={'profile__container'}>
            <div className={'profile__img'}>
                <img className={'profile__avatar'} src={user?.avatar} alt={'User Avatar'}/>
            </div>
            <h1 className={'profile__name'}>{user?.name}</h1>
        </div>
    );
};

export default Profile;
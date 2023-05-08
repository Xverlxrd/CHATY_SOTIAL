import React from 'react';
import {useAuth} from "../Provider/useAuth";
import {signOut} from 'firebase/auth'

const LogOut = () => {
    const {user, gAuth} = useAuth()

    return (
        <div className={'logout__container'}>
            <button onClick={() => signOut(gAuth)} className={'logout__btn'}>Выйти</button>
        </div>
    );
};

export default LogOut;
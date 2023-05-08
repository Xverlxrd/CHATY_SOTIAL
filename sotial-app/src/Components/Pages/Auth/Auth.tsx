import React, {FC, SyntheticEvent} from 'react';
import './Auth.css';
import {IUserInfo} from "./typesAuth";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const Auth:FC = () => {
    const [isAuth, setIsAuth] = React.useState(true)
    const [userInfo, setUserInfo] = React.useState<IUserInfo>({
        email: '',
        password: '',
    } as IUserInfo)
    const onLogin = async(e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const auth = getAuth()


        if(isAuth){

            console.log('Auth')
        }else{
            console.log('Registration')
            try {
                await createUserWithEmailAndPassword(
                    auth,
                    userInfo.email,
                    userInfo.password
                )
            } catch (error: any) {
                error.message && console.log(error.message)
            }
        }


        setUserInfo({
            email: '',
            password: '',
        })
    }

    return (
        <div className={'auth__container'}>
            {isAuth && (
                <form onSubmit={onLogin} className={'auth__form'}>
                    <h1 className={'auth__form_title'}>Добро пожаловать!</h1>

                    <div className={'auth__inputs'}>
                        <input
                            placeholder={'Email'}
                            value={userInfo.email}
                            onChange={e => setUserInfo(({...userInfo, email: e.target.value}))}
                            type={'email'}
                            className={'auth__email'}
                        />
                        <input
                            placeholder={'Password'}
                            value={userInfo.password}
                            onChange={e => setUserInfo({...userInfo, password: e.target.value})}
                            type={'password'}
                            className={'auth__password'}/>
                    </div>

                    <div className={'auth__btns'}>
                        <button type={'submit'} className={'auth__btn_login'}>Войти</button>
                        <button onClick={e => setIsAuth(false)} className={'auth__btn_reg'}>Регистрация</button>
                    </div>
                </form>
            )}
            {!isAuth &&(
                <form onSubmit={onLogin} className={'reg__form'}>
                    <h1 className={'reg__form_title'}>Регистрация!</h1>

                    <div className={'reg__form_title'}>
                        <input
                            value={userInfo.email}
                            onChange={e => setUserInfo(({...userInfo, email: e.target.value}))}
                            type={'email'}
                            className={'reg__email'}
                        />
                        <input
                            value={userInfo.password}
                            onChange={e => setUserInfo({...userInfo, password: e.target.value})}
                            type={'password'}
                            className={'reg__password'}/>
                    </div>

                    <div className={'reg__btns'}>
                        <button type={'submit'} className={'reg__btn_reg'}>Регистрация</button>
                        <button onClick={e => setIsAuth(true)} className={'reg__btn_login'}>Войти</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Auth;
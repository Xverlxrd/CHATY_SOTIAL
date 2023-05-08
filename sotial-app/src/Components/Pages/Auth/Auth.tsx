import React, {FC, SyntheticEvent, useEffect} from 'react';
import './Auth.css';
import {IUserInfo} from "./typesAuth";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {useAuth} from "../../UI/Provider/useAuth";
import {useNavigate } from "react-router-dom";

const Auth:FC = () => {
    const {gAuth, user} = useAuth()

    const navigate = useNavigate()
    useEffect(() => {
        if(user) navigate('/')
    }, [user])

    const [isAuth, setIsAuth] = React.useState(true)
    const [userInfo, setUserInfo] = React.useState<IUserInfo>({
        email: '',
        password: '',
        name: ''
    } as IUserInfo)
    const [error, setError] = React.useState('')
    const onLogin = async(e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const auth = getAuth()

        if(isAuth){
            try {
                await signInWithEmailAndPassword(
                    gAuth,
                    userInfo.email,
                    userInfo.password
                )
            } catch (error: any) {
                error.message && setError(error.message = 'Ошибка авторизации')
            }
        }else{
            try {
                const res = await createUserWithEmailAndPassword(
                    gAuth,
                    userInfo.email,
                    userInfo.password
                )

                await updateProfile(res.user,{
                    displayName: userInfo.name
                })
            } catch (error: any) {
                error.message && setError(error.message = 'Ошибка регистрации')
            }
        }


        setUserInfo({
            email: '',
            password: '',
            name: ''
        })
    }

    return (
        <div className={'auth__container'}>
            {error && (
                <div className={'error'}>{error}</div>
            )}
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

                    <div className={'reg__form_inputs'}>
                        <input
                            placeholder={'Введите ваш Email'}
                            value={userInfo.email}
                            onChange={e => setUserInfo(({...userInfo, email: e.target.value}))}
                            type={'email'}
                            className={'reg__email'}
                        />
                        <input
                            placeholder={'Введите ваш пароль'}
                            value={userInfo.password}
                            onChange={e => setUserInfo({...userInfo, password: e.target.value})}
                            type={'password'}
                            className={'reg__password'}/>
                        <input
                            placeholder={'Введите ваш никнейм'}
                            value={userInfo.name}
                            onChange={e => setUserInfo({...userInfo, name: e.target.value})}
                            type={'text'}
                            className={'reg__name'}/>
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
import React, {FC} from "react";
import {IUser, TypeSetState} from "../../../Types";
import {getAuth, onAuthStateChanged, Auth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {users} from "../SideBar/dataSideBar";

interface AuthProviderProps {
    children: any
}

interface IContext {
    user: IUser | null
    setUser: TypeSetState<IUser | null>
    gAuth: Auth
}

export const AuthContext = React.createContext<IContext>({} as IContext)

export const AuthProvider:FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = React.useState<IUser | null>(null)
    const gAuth = getAuth()

    const base = getFirestore()

    React.useEffect(() => {
        const unListen = onAuthStateChanged( gAuth, authUser => {
            if(authUser){
                setUser({
                    _id: authUser.uid,
                    avatar: users[1].avatar,
                    name: authUser.displayName || ''
                })
            }else{
                setUser(null)
            }

        })
        return () => {
            unListen()
        }
    }, [])

    const values = React.useMemo(() => ({
        user,
            setUser,
            gAuth,
        base
    }), [user, gAuth])

    return <AuthContext.Provider value={{user, setUser, gAuth}}>
        {children}
    </AuthContext.Provider>
}
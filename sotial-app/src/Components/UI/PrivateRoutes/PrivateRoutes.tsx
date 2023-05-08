import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./data";
import Loy from "../Loy/Loy";
import {useAuth} from "../Provider/useAuth";
import Auth from "../../Pages/Auth/Auth";

const PrivateRoutes:FC = () => {
    const {user} = useAuth()
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => {
                    if(route.auth && !user){
                        return false;
                    }
                    return (
                        <Route
                        path={route.path}
                        key={`route ${route.path}`}
                        element={
                            <>
                                <Loy>
                                    {route.auth && !user ? (
                                        <Auth/>
                                        ) : (
                                        <route.component />
                                    )}
                                </Loy>
                            </>
                        }
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default PrivateRoutes;
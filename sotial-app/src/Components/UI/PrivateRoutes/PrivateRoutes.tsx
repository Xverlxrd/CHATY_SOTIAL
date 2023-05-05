import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./data";
import Loy from "../Loy/Loy";



const PrivateRoutes:FC = () => {
    const isAuth = true;
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => {
                    if(route.auth && !isAuth){
                        return false;
                    }
                    return (
                        <Route
                        path={route.path}
                        key={`route ${route.path}`}
                        element={
                            <>
                                <Loy><route.component /></Loy>

                            </>}
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default PrivateRoutes;
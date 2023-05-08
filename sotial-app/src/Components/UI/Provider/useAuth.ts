import React from "react";
import {AuthContext} from './ProviderAuth'

export const useAuth = () => {
    return React.useContext(AuthContext)
}
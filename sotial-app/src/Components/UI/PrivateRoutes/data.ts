import Start from "../../Pages/Start/Start";
import Massage from "../../Pages/Message/Massage";
import Profile from "../../Pages/Profile/Profile";
import Friends from "../../Pages/Friends/Friends";
import Auth from "../../Pages/Auth/Auth";
import Chat from "../../Pages/Message/Chat/Chat";
export const routes = [
    {
        path: '/',
        component: Start,
        auth: true,
    },
    {
        path: '/profile/:id',
        component: Profile,
        auth: true,
    },
    {
        path: '/message:id',
        component: Chat,
        auth: true,
    },
    {
        path: '/messages',
        component: Massage,
        auth: true,
    },
    {
        path: '/friends:id',
        component: Friends,
        auth: true,
    },
    {
        path: '/auth',
        component: Auth,
        auth: false,
    },
]
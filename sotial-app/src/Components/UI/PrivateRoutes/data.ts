import Start from "../../Pages/Start/Start";
export const routes = [
    {
        path: '/',
        component: Start,
        auth: true,
    },
    {
        path: '/profile/:id',
        component: Start,
        auth: true,
    },
    {
        path: '/message:id',
        component: Start,
        auth: true,
    },
    {
        path: '/messages',
        component: Start,
        auth: true,
    },
    {
        path: '/friends:id',
        component: Start,
        auth: true,
    },
    {
        path: '/auth',
        component: Start,
        auth: false,
    },
]
import Home from "../pages/Client/Home";
import AboutUs from "../pages/Client/AboutUs";
import Login from "../pages/Client/Login";
import AuthHome from "../pages/Client/Auth/Home";

const paths = [
    {
        path: '/',
        component: Home,
        props: {},
    },
    {
        path: '/about-us',
        component: AboutUs,
        props: {},
    },
    {
        path: '/login',
        component: Login,
        props: {},
    },
    {
        path: '/auth/home',
        component: AuthHome,
        props: {},
    },
];

export default paths;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Users from "../Pages/Users";
import Posts from "../Pages/posts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/contact us",
                element: <Contact></Contact>,
            },
            {
                path: "/users",
                element: <Users></Users>,
            },
            {
                path: "/posts",
                element: <Posts></Posts>,
            },
        ],
    },

]);

export default router;
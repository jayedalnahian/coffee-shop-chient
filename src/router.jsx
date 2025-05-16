import {createBrowserRouter,} from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";




const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children:[
            {
                index: true,
                Component: Home,
                loader: ()=> fetch('http://localhost:3000/coffees'),
            },
            {
                path: "/addCoffee",
                Component: AddCoffee
            },
            {
                path: "/updateCoffee/:id",
                Component: UpdateCoffee,
                loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`)
            },
            {
                path:'/sign-in',
                Component: SignIn
            },
            {
                path: '/sign-up',
                Component: SignUp
            },
            {
                path: '/users',
                Component: Users,
                loader: ()=>fetch('http://localhost:3000/users')
            }
        ]
    },
]);

export default router;
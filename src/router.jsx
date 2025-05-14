import {createBrowserRouter,} from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";




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
                path: "/updateCoffee",
                Component: UpdateCoffee
            }
        ]
    },
]);

export default router;
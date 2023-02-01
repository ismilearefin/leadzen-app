import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Details from "../Components/Details/Details";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
    },
    {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    }
   
])
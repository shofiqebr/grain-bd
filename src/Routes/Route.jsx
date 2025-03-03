import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import Product from "../Pages/product/Product";
import Landing from "../Pages/landing/Landing";
import Form from '../Pages/landing/files/From'
import Cart from "../Pages/cart/Cart";
import CheckOut from "../Pages/checkout/CheckOut";
import AllCategory from "../Pages/allCategory/AllCategory";
import Category from "../Pages/category/Category";
import Login from "../Pages/login/Login";
import Registration from "../Pages/registration/Registration";


const Route = createBrowserRouter([
    {
        path: "/", 
        element: <Root />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/product",
                element: <Product/>
            },
            {
                path: "/landing",
                element: <Landing/>
            },
            {
                path: "/form",
                element: <Form/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/checkout",
                element: <CheckOut/>
            },
            {
                path: "/allCategory",
            
                element: <AllCategory/>
            },
            {
                path: "/category",
                element: <Category/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/registration",
                element: <Registration/>
            },
          
        ]
    }
])

export default Route;
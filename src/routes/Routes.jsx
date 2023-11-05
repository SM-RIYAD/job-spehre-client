import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Alljobs from "../pages/Alljobs/Alljobs";
import Myjobs from "../pages/Myjobs/Myjobs";
import Blogs from "../pages/Blogs/Blogs";
import Addajob from "../pages/Addajob/Addajob";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../pages/Jobdetails/JobDetails";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
 
        children: [
            {
                path: '/',
                element: <Home/>, 
            
            },     {
                path: '/login', 
                element: <Login/>, 
                
            },
            {
                path: '/alljobs', 
                element: <Alljobs/>, 
                
            },
            {
                path: '/myjobs', 
                element: <Myjobs/>, 
                
            },
            {
                path: '/blogs', 
                element: <Blogs/>, 
                
            },
            {
                path: '/register', 
                element: <Register/>, 
                
            },
            {
                path: '/addajob', 
                element:  <PrivateRoute><Addajob/> </PrivateRoute>, 
                
            },
            {
                path: '/appliedjobs', 
                element: <AppliedJobs/>, 
                
            },
            {
                path: '/jobdetails/:id', 
                element:  <PrivateRoute><JobDetails/></PrivateRoute>  
                
            },
        ]
    }    
]);

export default router;
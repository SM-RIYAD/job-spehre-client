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
import UpdateJob from "../pages/UpdateaJob/UpdateJob";
import Errorpage from "../Components/ErrorPage/Errorpage";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement:<Errorpage/>,
 
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
                element:  <PrivateRoute><Myjobs/> </PrivateRoute>, 
            
                
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
                element: <PrivateRoute><AppliedJobs/></PrivateRoute>  
                
            },
            {
                path: '/jobdetails/:id', 
                element:  <PrivateRoute><JobDetails/></PrivateRoute>  
                
            },
            {
                path: '/updatejob/:id', 
                element: <UpdateJob></UpdateJob>
                
            },
        ]
    }    
]);

export default router;
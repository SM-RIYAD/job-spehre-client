import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://job-sphere-server.vercel.app/',
    withCredentials: true
});

const useAxiosSecure = () => {
    
   
    // const {  logOut } = useContext(AuthContext);
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                // logOut()
                //     .then(() => { 
                //         navigate('/login')
                //     })
                //     .catch(error => console.log(error))

                // logOut()
                // .then((result) => {
                //   console.log(result.user);
            
                // })
                // .catch((err) => console.log(err));
                // alert("please log out!")
            }
        })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;
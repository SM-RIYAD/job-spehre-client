import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/',
    // withCredentials: true
});
const useAxiosSecure = () => {
   

    return axiosSecure;
};

export default useAxiosSecure;
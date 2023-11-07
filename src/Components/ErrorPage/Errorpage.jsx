import React from 'react';
import { Link, useRouteError } from "react-router-dom";
const Errorpage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 h-96 p-10">
   
     
        <p className=" text-4xl text-red-600 font-bold">
        Sorry,page not found!   Go back to   <Link to="/">
          <button className="btn btn-error">Home</button>
        </Link>
      
        </p>
      
    </div>
    );
};

export default Errorpage;
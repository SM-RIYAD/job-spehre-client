import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../shared/Header";




const Root = () => {


    return (
        <div className="font-class">
           <Header></Header>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Root;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../providers/AuthProvider";
const JobCards = ({ job }) => {
    const { user } = useContext(AuthContext);
    
    console.log("photo url", user?.photoURL);
    const errorToast = (protectederror) =>
    toast.error(protectederror, { position: "bottom-center" });
  const {_id,
    jobPhoto,
    JobTitle,
    UserName,
    companyLogo,
    useremail,
    JobCategory,
    SalaryRange,
    JobDescription,ApplicationDeadline,JobPostingDate,JobApplicantsNumber
  } = job;
  const handleErrorToast =()=>{
    if(user?.displayName )

   { 
    return;}
   else {
    // alert("You have to be logged in to see the job details!")
    Swal.fire({
        title: 'Private Route!',
        text: "You have to be logged in to see Details",
        icon: 'warning',
       
        
    })
   }

  }
  return (
    <div>
     
      <div className=" p-5 hover:shadow-xl hover:border hover:rounded hover:bg-blue-100 flex lg:flex-row lg:space-y-0 space-y-5 flex-col">
        
      {/* <div className="lg:w-1/4 lg:flex flex-col  ">
        
<img className="object-cover h-[100px] w-[100px] " src={companyLogo} alt="" srcset="" />
    
         
   
       
      </div> */}
        <div className="lg:w-1/3 lg:flex   ">
        <img className="object-cover h-[100px] w-[100px] " src={companyLogo} alt="" srcset="" />
        <div className="lg:ms-2 flex-col flex">
        <p className="text-2xl"> {JobTitle}</p>
          <button className="text-sm  h-[30px] text-purple-500 w-[80px] border-purple-500 border  rounded">
      
            {JobCategory}
          </button>
        </div> 
         
         
        </div>

        <div className="lg:w-1/3 flex lg:ms-[70px]  flex-col">
      
         
          <p className=" "> Apply before <span className="">{ApplicationDeadline} </span>  </p>

         
          <p className=" "> Posted By <span className="font-bold" > <i>{UserName} </i> </span>  on <span className="">{JobPostingDate} </span></p>
         
        </div>

        <div className="lg:w-1/3  flex lg:flex-row  flex-col lg:items-end lg:justify-between">

            <div className="w-full h-full flex flex-col ">
            <p className=""> $ {SalaryRange}</p>
            <p className=""> Applicants : {JobApplicantsNumber} </p>

            </div>
          <div className="flex "> 
            <Link to={`jobdetails/${_id}`}> 
            <button onClick={handleErrorToast} className="btn-success  btn my-3 btn-outline">
              {" "}
              Job details
            </button>
            </Link>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;

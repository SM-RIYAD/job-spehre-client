import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import JobdetailsBanner from "./jobdetailsBanner";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate.replace(/\//g, "-"); // Replace slashes with dashes (yy/mm/dd to yy-mm-dd)
  };
  const { id } = useParams();
  const [detailedjob, setDtailedjob] = useState({});
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`specificjob/${id}`).then((result) => {
      setDtailedjob(result.data);
    });
  }, [axiosSecure, id]);
  const {
    companyLogo,

    jobPhoto,

    JobTitle,

    UserName,
    Location,
    useremail,

    JobCategory,
    CompanyName,
    SalaryRange,

    JobDescription,

    JobPostingDate,

    ApplicationDeadline,

    JobApplicantsNumber,
  } = detailedjob;
  const handleApplyjob = () => {
    const currentDateTime = new Date().getTime();
    const deadlineTIme = new Date(ApplicationDeadline).getTime();
    const currentDate = new Date();
    const deadline = new Date(ApplicationDeadline);
    console.log(
      "current date",
      currentDate,
      currentDateTime,
      " ",
      "deadline",
      deadline,
      deadlineTIme
    );
    if (currentDate > deadline) {
      // alert("you cant apply ! deadline is over");
      Swal.fire({
        title: "Can't apply!",
        text: "Deadline is over",
        icon: "warning",
        confirmButtonText: "ok",
      });
    } else {
      console.log(user.email, " ", useremail);
      if (user.email === useremail) {
        Swal.fire({
          title: "Can't apply!",
          text: "You can't apply to your own job!",
          icon: "warning",
          confirmButtonText: "ok",
        });
      } else {
        document.getElementById("my_modal_1").showModal();
      }
    }
  };

  const handleApplyJobfromModal=(e)=>{

    e.preventDefault();
    const form = e.target;

    const applicantName=form.apllicantname.value;
    const applicantEmail=form.applicantEmail.value;
    const ResumeURl=form.Resumeurl.value;
    const newjob = {
      companyLogo,
      ResumeURl,applicantEmail,applicantName,
      jobPhoto,
    
      JobTitle,
   
     UserName,
    
      useremail,
  
      JobCategory,
      CompanyName,
       Location,
      SalaryRange,
    
     JobDescription,
     
   JobPostingDate,
   
      ApplicationDeadline,
 
      JobApplicantsNumber,
   };
    axiosSecure.post("applyjob", newjob, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Applied to the job Successfully",
          icon: "success",
          confirmButtonText: "Cool"
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors if any
    });

  }
  return (
    <div>
      <JobdetailsBanner JobTitle={JobTitle} jobPhoto={jobPhoto} />
      <div className="max-w-6xl mx-auto">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-2/3 p-5   lg:pe-20">
            <div className="hover:shadow-xl  flex lg:flex-row     flex-col">
              <div className="for-img lg:w-1/6  p-2 ">
                <img
                  className="h-[100px] bg-cover w-full lg:w-[100px]"
                  src={companyLogo}
                  alt=""
                />
              </div>
              <div className="  lg:w-5/6   p-5 ">
                <h1 className="text-xl">{JobTitle}</h1>
                <div className="flex  lg:flex-row justify-between flex-col">
                  <p className="text-gray-400  "> {CompanyName}</p>
                  <p className="text-gray-400  "> ${SalaryRange}</p>
                  <p className="text-gray-400  "> {Location}</p>
                </div>
              </div>
            </div>
            <p className="text-2xl  mt-[60px]"> Job Description</p>
            <p className="text-base text-gray-400 "> {JobDescription}</p>
          </div>
          <div className="lg:w-1/3  ">
            <div className="border flex flex-col  p-5 space-y-3">
              <h1 className="text-start text-xl">Job Overview</h1>

              <div className="flex justify-between ">
                <p className="text-gray-500"> Job Posted:</p>

                <p className="text-gray-500"> {formatDate(JobPostingDate)}</p>
              </div>

              <div className="flex justify-between ">
                <p className="text-gray-500 "> Job Category:</p>

                <p className="text-gray-500"> {JobCategory}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-gray-500 "> Applicants:</p>

                <p className="text-gray-500"> {JobApplicantsNumber}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-gray-500 "> Location:</p>

                <p className="text-gray-500"> {Location}</p>
              </div>

              <div className="flex justify-between ">
                <p className="text-gray-500 "> Salary Range:</p>

                <p className="text-gray-500"> ${SalaryRange}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-gray-500 "> Deadline:</p>

                <p className="text-gray-500">
                  {" "}
                  {formatDate(ApplicationDeadline)}
                </p>
              </div>
              <div className="flex justify-start ">
                <button
                  onClick={handleApplyjob}
                  className="btn btn-primary border-none text-white  "
                >
                  Apply
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
                  <form onSubmit={handleApplyJobfromModal} className="card-body  ">
                  <div className="grid grid-cols-1 gap-2">
                <div className="form-control">
           
                  <label className="label">
                    <span className="label-text text-black">Applicant Name</span>
                  </label>
                  <input
                    type="text"
                    name="apllicantname"
                    value={user?.displayName}
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Applicant Email</span>
                  </label>
                  <input
                    type="email"
                    name="applicantEmail"
                    value={user?.email}
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                </div>

             

        
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-black">
                      Resume Url
                    </span>
                  </label>

                  <input
                    type="text"
                    name="Resumeurl"
                    placeholder="enter your resume url"
                    className="input input-bordered"
                    required
                  />  <input
                  type="submit"
            
                  value="Submit"
                  className="btn bg-green-500 mt-5 text-white border-none w-full  btn-primary"
                /><div className="modal-action">
               
                </div>
              
                </div>

             
                
              
              </div>
              </form>
                    
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

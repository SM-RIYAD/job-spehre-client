import React from 'react';
import UpdateJobBanner from './UpdateJobBanner';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext,useEffect } from "react";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import moment from 'moment';
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from '../../hooks/useAxiosSecure';
const UpdateJob = () => {
    const { id } = useParams();
   
    const axiosSecure = useAxiosSecure();
    const { user,  } = useContext(AuthContext);
    const [detailedjob,setDtailedjob]=useState({});
    const [selectedOption, setSelectedOption] = useState("OnSite"); // Initial selected option
    
  console.log("user in add product ", user);
    

    useEffect(() => {
        axiosSecure.get(`specificjob/${id}`).then((result) => {
          setDtailedjob(result.data);
        });
      }, [axiosSecure,id]);

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
      
console.log("this job is for updating:",detailedjob);
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





    const handleUpdateProduct=(e)=>{


        e.preventDefault();
        const form = e.target;
        
        const companyLogo=form.companylogo.value;
       
        const jobPhoto=form.photourl.value;
       
        const JobTitle=form.jobname.value;
      
        const UserName=form.username.value;
        const CompanyName=form.companyname.value;
        const Location=form.location.value;
        const useremail=user?.email;
     
        const JobCategory=selectedOption;
       
       const  SalaryRange=form.salary.value;
       
        const JobDescription=form.jobdescription.value;
        
       const  JobPostingDate=form.postingdate.value;
      
        const ApplicationDeadline=form.deadlinedate.value;
    
        const JobApplicantsNumber=parseInt(form.ApplicantsNumber.value);
        const newjobtoUpdate={
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
          
    } 
        axiosSecure.put(`/updatejob/${id}` , newjobtoUpdate, {
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Job Updated Successfully",
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
    return (<div>


        <UpdateJobBanner></UpdateJobBanner>
        <div className="lg:max-w-6xl mx-auto">
        <div className="min-h-screen px-5">
          <ToastContainer />

          <div className="lg:max-w-6xl   mx-auto  rounded-xl shadow-xl">
            <form onSubmit={handleUpdateProduct} className="card-body border ">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Job title</span>
                  </label>
                  <input
                    type="text"
                    name="jobname"
                    defaultValue={JobTitle}
                    placeholder="Enter your job title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black"> Job Type</span>
                  </label>
                  <select
                    className="input input-bordered"
                    value={selectedOption}
                    defaultValue={JobCategory}
                    onChange={handleSelectChange}
                  >
                    <option value="On Site">On Site</option>
                    <option value="Remote">Remote</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
               
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-black">
                      Company Logo Url
                    </span>
                  </label>

                  <input
                    type="photo"
                    name="companylogo"
                    defaultValue={companyLogo}
                    placeholder="enter company logo url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photourl"
                    defaultValue={jobPhoto}
                    placeholder="enter photo url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">
                      ApplicantsNumber
                    </span>
                  </label>
                  <input
                    type="number"
                    name="ApplicantsNumber"
                    defaultValue={JobApplicantsNumber}
                    placeholder="ApplicantsNumber"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={user?.displayName}
                    defaultValue={UserName}
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Salary Range</span>
                  </label>
                  <input
                  defaultValue={SalaryRange}
                    type="text"
                    name="salary"
                    placeholder="salary range eg. 2000-5000"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Posting Date</span>
                  </label>
              

                  {/* <DatePicker
                    className="input postingDate input-bordered deadline w-full"
                    selected={postingStartDate}
                  
                    onChange={(date) => setPostingStartDate(date)}
                  /> */}
                     <input
                  type="date"
                  name="postingdate"
                  placeholder="enter the date of posting"
                  className="input input-bordered"
                  defaultValue={JobPostingDate}
                  required
                />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">
                      {" "}
                      Application Deadline
                    </span>
                  </label>
                  <input
                  type="date"
                  name="deadlinedate"
                  placeholder="enter the date of posting"
                  className="input input-bordered"
                  defaultValue={ApplicationDeadline}
                  required
                />
                </div>
                <div className="form-control  ">
                  <label className="label">
                    <span className="label-text text-black">
                      Job description
                    </span>
                  </label>

                  <textarea
                    className="input input-bordered "
                    required
                    placeholder="Enter Job Description"
                    name="jobdescription"
                    defaultValue={ JobDescription}
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                   defaultValue={Location}
                    placeholder="Enter company location"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Company Name</span>
                  </label>
                  <input
                    type="text"
                    name="companyname"
                 defaultValue={CompanyName}
                    placeholder="enter company Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Add Job"
                className="btn btn-block btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    );
};

export default UpdateJob;
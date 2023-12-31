import React, { useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import BannerAddajob from "./BannerAddajob";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import PageTitle from "../../Components/PageTitle";
const Addajob = () => {
  const axiosSecure = useAxiosSecure();
  const { user,  } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("OnSite"); // Initial selected option
  const [startDate, setStartDate] = useState(new Date());
console.log("user in add product ", user);
  const [postingStartDate, setPostingStartDate] = useState(new Date());
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleAddProduct = (e) => {
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
    
   
      // errorToast("Rating should be less than 5");
      
   
      // const description = form.description.value;
      // const type = form.type.value;
      // const brand = form.brandName.value;

      const newjob = {
         companyLogo,
   
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

      console.log(" added job is  ", newjob);
      // /sending product to server
      //   fetch("https://brand-website-server.vercel.app/addproduct", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(newProduct),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log(data);
      //       if (data.insertedId) {
      //         Swal.fire({
      //           title: "Success!",
      //           text: "Product Added Successfully",
      //           icon: "success",
      //           confirmButtonText: "Cool",
      //         });
      //       }
      //     });
      axiosSecure.post("addjob", newjob, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Job Added Successfully",
            icon: "success",
            confirmButtonText: "Cool"
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors if any
      });
  };
  return (
    <div>
      <PageTitle title={"Add a job"}></PageTitle>
      <BannerAddajob />

      <div className="lg:max-w-6xl mx-auto">
        <div className="min-h-screen px-5">
          <ToastContainer />

          <div className="lg:max-w-6xl   mx-auto  rounded-xl shadow-xl">
            <form onSubmit={handleAddProduct} className="card-body border ">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Job title</span>
                  </label>
                  <input
                    type="text"
                    name="jobname"
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
              

                  <input
                  type="date"
                  name="postingdate"
                  placeholder="enter the date of posting"
                  className="input input-bordered"
              
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
                 
                    placeholder="enter company Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Add Job"
                className="btn btn-block text-white border-none bg-emerald-500 "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addajob;

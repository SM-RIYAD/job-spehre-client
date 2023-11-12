import React from "react";
import { useEffect, useState, useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import AppliedJobsBanner from "./AppliedJobsBanner";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";
import AppliedJobResponsivetable from "./AppliedJobResponsivetable";
import { usePDF } from "react-to-pdf";
import PageTitle from "../../Components/PageTitle";
const AppliedJobs = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [selectedOption, setSelectedOption] = useState("");
  const [jobstoshow, setJobstoshow] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [hasReloaded, setHasReloaded] = useState(false);
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
 const location=useLocation();
  console.log("location state previous",  location?.state?.from);

 


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    console.log("this is selected now", selectedOption);
  };
  const url = `/myappliedjobs?email=${user?.email}`;

  

    // const fetchdata= ()=>{
    //   setloading(true);
    //   axiosSecure.get(url).then((res) => {
    //     setJobs(res?.data);
    //     setJobstoshow(res?.data);
    //     setloading(false);
       
    //   });

      
    // }

  useEffect(() => {

    setloading(true);
    axiosSecure.get(url).then((res) => {
      setJobs(res.data);
      setJobstoshow(res.data);
      setloading(false);
     
    });
  }, [url, axiosSecure]);







  // useEffect(() => {
  //   // Function to fetch data when token is available
  //   // window.location.reload();
  //   fetchdata();
  //   // Event listener for changes in cookies
  //   const handleCookieChange = () => {
  //     const newToken = Cookies.get('token');
  //     if (newToken && newToken !== token) {
  //       setToken(newToken);
  //     }
  //   };

  //   // Add event listener for changes in cookies
  //   window.addEventListener('storage', handleCookieChange);

  //   // Fetch data if token is available
  //   if (token) {
  //     fetchdata();
  //   }

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener('storage', handleCookieChange);
  //   };
  // }, [token,url,user]); 











  useEffect(() => {
    console.log("this is selected now", selectedOption);
    if (selectedOption === "All Jobs") {
      setJobstoshow(jobs);
    } else {
      const newjobs = jobs.filter(
        (job) => job.JobCategory.toUpperCase() === selectedOption.toUpperCase()
      );
      setJobstoshow(newjobs);
    }

    // console.log("this is job array after filter ", jobs);
  }, [selectedOption]);
  console.log(" my applied jobs", jobstoshow);
  return (
    <div>
      <PageTitle title={"Applied Jobs"}></PageTitle>
      <AppliedJobsBanner></AppliedJobsBanner>
      
      <div className="6xl mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center my-10">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="select md:ms-5 md:max-w-[300px] max-w-[300px]  select-bordered w-full ms-2"
          >
            <option value="All Jobs">All Jobs</option>
            <option value="OnSite">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Part Time">Part Time</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <button className="btn lg:mx-0 mx-5 max-w-[300px]  text-white border-none bg-emerald-500 btn-primary" onClick={() => toPDF()}>
            Download Summary
          </button>
        </div>

        {loading ? (
          <div className="w-full flex justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div ref={targetRef}>
            <div className="max-w-6xl mx-auto">
              {jobstoshow?.length === 0 ? (
                <div className=" w-full min-h-[400px] flex flex-col justify-center mt-24  items-center">
                  {" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3473/3473482.png"
                    alt=""
                   className="w-1/3"
                  />{" "}
                  <p className="text-2xl text-gray-300 font-bold my-10">No jobs found!</p>
                </div>
              ) : (
                <div>
                  {" "}
                  <div className="lg:block hidden">
                    <div className="overflow-x-auto">
                      <table className="table">
                        <thead>
                          <tr>
                            <th> Job Title</th>
                            <th>Job category</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline </th>
                            <th>Salary Range</th>
                          
                          </tr>
                        </thead>
                        <tbody>
                          {jobstoshow?.map((job, idx) => (
                            <tr key={idx}>
                              {" "}
                              <td>{job?.JobTitle}</td>
                              <td>{job?.JobCategory}</td>
                              <td>{job.JobPostingDate}</td>
                              <td>{job.ApplicationDeadline}</td>
                              <td>${job.SalaryRange}</td>
                             
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className=" lg:hidden  ">
                    {jobstoshow?.map((job, idx) => (
                      <AppliedJobResponsivetable key={idx} job={job} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;

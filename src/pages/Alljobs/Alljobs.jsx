import React from "react";
import AlljobBanner from "./AlljobBanner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

import "./alljobcss/job.css";
import Responsivetable from "./Responsivetable";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";
const Alljobs = () => {
  const axiosSecure = useAxiosSecure();
  const [jobs, setJobs] = useState([]);
  const [showjobs, setShowJobs] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axiosSecure.get("alljobs").then((result) => {
      setJobs(result.data);
      setShowJobs(result.data);
      setloading(false);
    });
  }, [axiosSecure]);

  console.log("this is job array", jobs);

  //   const {_id,
  //     jobPhoto,
  //     JobTitle,
  //     UserName,
  //     useremail,
  //     JobCategory,
  //     SalaryRange,
  //     JobDescription,ApplicationDeadline,JobPostingDate,JobApplicantsNumber
  //   } = showjobs;

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const filter = form.search.value.toUpperCase();

    console.log("search: ", filter);
    if (filter.length === 0) {
      setShowJobs(jobs);
    } else {
      const newjobs = jobs.filter(
        (job) => job.JobTitle.toUpperCase() === filter
      );
      setShowJobs(newjobs);
    }
  };
  return (
    <div>
      <PageTitle title={"All jobs"}></PageTitle>
      <AlljobBanner></AlljobBanner>

      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center my-10">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Search a job"
              className="input input-bordered"
            />
            <button className="btn bg-green-600 border-none text-white btn-warning">
              Search
            </button>
          </form>
        </div>
      {loading? <div className="w-full flex justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>:   <div>
        <div className="lg:block hidden">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th> Posted by</th>
                  <th>Job Title</th>
                  <th>Job Posting Date</th>
                  <th>Application Deadline </th>
                  <th>Salary Range</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {showjobs.map((job, idx) => (
                  <tr key={idx}>
                    {" "}
                    <td>{job?.UserName}</td>
                    <td>{job?.JobTitle}</td>
                    <td>{job.JobPostingDate}</td>
                    <td>{job.ApplicationDeadline}</td>
                    <td>${job.SalaryRange}</td>
                    <th>
                        <Link to={`/jobdetails/${job._id}`}>
                        <button className="btn bg-green-600 text-white btn-xs">
                        details
                      </button>
                        </Link>
                      
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className=" lg:hidden  ">

        {showjobs.map((job, idx) => <  Responsivetable key={idx} job={job}/>)
              

    
    }
          
        </div>
        </div> } 
          
        
       
      </div>
    </div>
  );
};

export default Alljobs;

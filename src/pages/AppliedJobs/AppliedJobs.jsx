import React from 'react';
import  { useEffect, useState, useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import AppliedJobsBanner from './AppliedJobsBanner';
import { Link } from 'react-router-dom';
import AppliedJobResponsivetable from './AppliedJobResponsivetable';

const AppliedJobs = () => {
    const [jobstoshow, setJobstoshow] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setloading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const axiosSecure = useAxiosSecure();

 
    const url = `/myappliedjobs?email=${user?.email}`;
  
    useEffect(() => {
      // fetch(url, { credentials: 'include' })
      //     .then(res => res.json())
      //     .then(data => setBookings(data))
      setloading(true);
      axiosSecure.get(url).then((res) => {
        setJobs(res.data);
        setJobstoshow(res.data)
        setloading(false);
      });
    }, [url, axiosSecure]);
    console.log(" my applied jobs", jobstoshow);
    return (
        <div>

            <AppliedJobsBanner></AppliedJobsBanner>
            <div className='6xl mx-auto'>

                {
  loading? <div className="w-full flex justify-center">
  <span className="loading loading-spinner loading-xl"></span>
</div>:


<div className='max-w-6xl mx-auto'>


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
          <th>Action </th>
         

        </tr>
      </thead>
      <tbody>
        {jobstoshow.map((job, idx) => (
          <tr key={idx}>
            {" "}
          
            <td>{job?.JobTitle}</td>
            <td>{job?.JobCategory}</td>
            <td>{job.JobPostingDate}</td>
            <td>{job.ApplicationDeadline}</td>
       
            <td>${job.SalaryRange}</td>
            <Link to={`/jobdetails/${job._id}`}>
                        <button className="btn bg-green-600 text-white btn-xs">
                        details
                      </button>
                        </Link>
        
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
<div className=" lg:hidden  ">
  {jobs.map((job, idx) => (
    <AppliedJobResponsivetable key={idx} job={job} />
  ))}
</div>
</div>


                }


            </div>
           
        </div>
    );
};

export default AppliedJobs;
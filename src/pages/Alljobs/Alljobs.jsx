import React from "react";
import AlljobBanner from "./AlljobBanner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

import "./alljobcss/job.css";
const Alljobs = () => {
  const axiosSecure = useAxiosSecure();
  const [jobs, setJobs] = useState([]);
  const [showjobs, setShowJobs] = useState([]);

  useEffect(() => {
    axiosSecure.get("alljobs").then((result) => {
      setJobs(result.data);
      setShowJobs(result.data);
    });
  }, [axiosSecure]);

  console.log("this is job array", jobs);

  const {_id,
    jobPhoto,
    JobTitle,
    UserName,
    useremail,
    JobCategory,
    SalaryRange,
    JobDescription,ApplicationDeadline,JobPostingDate,JobApplicantsNumber
  } = showjobs;
  return (
    <div>
      <AlljobBanner></AlljobBanner>

      <div className="mx-auto max-w-6xl">
        <div className="lg:block hidden">
          <div className="overflow-x-auto">
            <table className="table">
        
              <thead>
                <tr>
                  <th>Name Who posted</th>
                  <th>Job Title</th>
                  <th>Job Posting Date</th>
                  <th>Application Deadline </th>
                  <th>Salary Range</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
             
                {
showjobs.map((job,idx)=>  <tr key={idx}  >   <td>{job?.UserName}</td>
<td>{job?.JobTitle}</td>
<td>{job.JobPostingDate}</td>
<td>{job.ApplicationDeadline}</td>
<td>${job.SalaryRange}</td>
<th>
  <button className="btn bg-green-600 text-white btn-xs">details</button>
</th>




</tr>)


                }




              </tbody>
            
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alljobs;

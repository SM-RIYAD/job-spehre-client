import React, { useEffect, useState, useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import MyjobBanner from "./MyjobBanner";
import MyjobResponsiveTable from "./MyjobResponsiveTable";
import { Link } from "react-router-dom";

const Myjobs = () => {
  const { user } = useContext(AuthContext);
  // const [bookings, setBookings] = useState([]);
  const [loading, setloading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `https://car-doctor-server-topaz-one.vercel.app/bookings?email=${user?.email}`;
  const url = `/myjobs?email=${user?.email}`;

  useEffect(() => {
    // fetch(url, { credentials: 'include' })
    //     .then(res => res.json())
    //     .then(data => setBookings(data))
    setloading(true);
    axiosSecure.get(url).then((res) => {
      setJobs(res.data);

      setloading(false);
    });
  }, [url, axiosSecure]);
  console.log(" my jobs", jobs);
  return (
    <div>
      <MyjobBanner></MyjobBanner>

      <div className=" max-w-6xl mx-auto">
      {loading? <div className="w-full flex justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>:<div>

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
        {jobs.map((job, idx) => (
          <tr key={idx}>
            {" "}
            <td>{job?.UserName}</td>
            <td>{job?.JobTitle}</td>
            <td>{job.JobPostingDate}</td>
            <td>{job.ApplicationDeadline}</td>
            <td>${job.SalaryRange}</td>
            <th>
              <Link to={`/updatejob/${job._id}`}>
                <button className="btn bg-orange-400 text-white btn-xs">
                  Update
                </button>
              </Link>

              <button className="btn bg-red-700 text-white btn-xs">
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
<div className=" lg:hidden  ">
  {jobs.map((job, idx) => (
    <MyjobResponsiveTable key={idx} job={job} />
  ))}
</div>
</div>} 
        
        
      </div>
    </div>
  );
};

export default Myjobs;

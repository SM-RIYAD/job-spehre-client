import React, { useEffect, useState, useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import MyjobBanner from "./MyjobBanner";
import MyjobResponsiveTable from "./MyjobResponsiveTable";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "../../Components/PageTitle";
const Myjobs = () => {
  const { user } = useContext(AuthContext);
  // const [bookings, setBookings] = useState([]);
  const [loading, setloading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobstoshow, setJobstoshow] = useState([]);
  const axiosSecure = useAxiosSecure();

 
  const url = `/myjobs?email=${user?.email}`;

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
  console.log(" my  jobs", jobs);

  const handleDelete =(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {


          fetch(`http://localhost:5000/deletejob/${id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                      Swal.fire(
                          'Deleted!',
                          'Job has been deleted.',
                          'success'
                      )
                      const remaining = jobs.filter(job => job._id !== id);
                      setJobs(remaining);
                  }
              })
         
      }
  })



  }
  return (
    <div>
      <PageTitle title={"My jobs"}></PageTitle>
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

              <button onClick={()=> handleDelete(job._id)} className="btn bg-red-700 text-white btn-xs">
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

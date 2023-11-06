import React from 'react';

const MyjobResponsiveTable = ({job}) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const formattedDate = new Date(dateString).toLocaleDateString(
          undefined,
          options
        );
        return formattedDate.replace(/\//g, "-"); // Replace slashes with dashes (yy/mm/dd to yy-mm-dd)
      };
    return (
        <div className="card w-full bg-base text-primary-content">
        <div className="card-body">
        <h2 className="text-black text-2xl">{job?.JobTitle}</h2>
          <div className=" flex flex-col   space-y-3">
      
       
              <div className="flex justify-between   ">
                <p className="text-gray-500"> Job Category:</p>

                <p className="text-gray-500 text-end">{job?.
JobCategory
}</p>
              </div>

              <div className="flex justify-between  ">
                <p className="text-gray-500 w-1/2 "> Job Title:</p>

                <p className="text-gray-500 w-1/2 text-end">{job?.JobTitle}</p>
              </div>
              <div className="flex justify-between   ">
                <p className="text-gray-500  w-1/2 "> Application Deadline:</p>

                <p className="text-gray-500  w-1/2  text-end"> {formatDate(job.ApplicationDeadline)}</p>
              </div>
              <div className="flex  justify-between ">
                <p className="text-gray-500 ">Posting Date</p>

                <p className="text-gray-500  text-end">{formatDate(job.JobPostingDate)} </p>
              </div>

              <div className="flex  justify-between ">
                <p className="text-gray-500 "> Salary Range:</p>

                <p className="text-gray-500  text-end"> ${job.SalaryRange}</p>
              </div>
              
              <div className="flex justify-start ">
         
              <button className="btn me-5 bg-orange-400 text-white btn-sm">
                        Update
                      </button>
                      <button className="btn bg-red-700 text-white btn-sm">
                       Delete
                      </button>
               
              </div>
            </div>
        </div>
      </div>
    );
};

export default MyjobResponsiveTable;
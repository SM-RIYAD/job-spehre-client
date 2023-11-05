import React from "react";

const JobCards = ({ job }) => {
  const {
    jobPhoto,
    JobTitle,
    UserName,
    useremail,
    JobCategory,
    SalaryRange,
    JobDescription,ApplicationDeadline,JobPostingDate,JobApplicantsNumber
  } = job;
  return (
    <div>
      <div className=" p-5 hover:shadow-xl hover:border hover:rounded hover:bg-blue-100 flex lg:flex-row lg:space-y-0 space-y-5 flex-col">
        <div className="lg:w-1/3 lg:flex flex-col  ">
          <p className="text-2xl"> {JobTitle}</p>
          <button className="text-sm  h-[30px] text-purple-500 w-[80px] border-purple-500 border  rounded">
      
            {JobCategory}
          </button>
         
        </div>

        <div className="lg:w-1/3 flex  flex-col justify-between">
      
         
          <p className="text-gray-400 "> Apply before <span className="text-red-400">{ApplicationDeadline} </span>  </p>

          <p className="text-gray-400"> Applicants : {JobApplicantsNumber} </p>
          <p className="text-gray-400 "> Posted By {UserName} on <span className="text-green-400">{JobPostingDate} </span></p>
         
        </div>

        <div className="lg:w-1/3  flex lg:flex-row  flex-col lg:items-end lg:justify-between">

            <div className="w-full h-full flex items-center">
            <p className="text-gray-400"> $ {SalaryRange}</p>

            </div>
          <div>
            <button className="btn-success  btn my-3 btn-outline">
              {" "}
              Job details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;

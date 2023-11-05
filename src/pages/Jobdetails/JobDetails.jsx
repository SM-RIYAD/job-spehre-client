import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import JobdetailsBanner from "./jobdetailsBanner";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
const JobDetails = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate.replace(/\//g, "-"); // Replace slashes with dashes (yy/mm/dd to yy-mm-dd)
  };
  const { id } = useParams();
  const [detailedjob, setDtailedjob] = useState({});
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`specificjob/${id}`).then((result) => {
      setDtailedjob(result.data);
    });
  }, [axiosSecure, id]);
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

  return (
    <div>
      <JobdetailsBanner JobTitle={JobTitle} jobPhoto={jobPhoto} />
      <div className="max-w-6xl mx-auto">

        
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-2/3 p-5   lg:pe-20">
          <div className="flex lg:flex-row     flex-col">
            <div className="for-img w-1/6  p-2 ">
                <img className="h-[70px] bg-cover w-[100px]" src={companyLogo} alt="" />

            </div>
            <div className="  w-5/6 mb-[100px]  p-2 ">
                <h1 className="text-xl">{JobTitle}</h1>
                <div className="flex  lg:flex-row justify-between flex-col">
                       <p className="text-gray-400  "> {CompanyName}</p>
                       <p className="text-gray-400  "> ${SalaryRange}</p>
                       <p className="text-gray-400  "> {Location}</p>
                </div>



            </div>



        </div>
            <p className="text-2xl"> Job Description</p>
            <p className="text-base text-gray-400 "> {JobDescription}</p>
          </div>
          <div className="lg:w-1/3 m-2 ">
            <div className="border flex flex-col  p-5 space-y-3">
              <h1 className="text-start text-xl">Job Overview</h1>

              <div className="flex justify-between ">
                <p className="text-gray-500"> Job Posted:</p>

                <p className="text-gray-500"> {formatDate(JobPostingDate)}</p>
              </div>

              <div className="flex justify-between ">
                <p className="text-gray-500 "> Job Category:</p>

                <p className="text-gray-500"> {JobCategory}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-gray-500 "> Applicants:</p>

                <p className="text-gray-500"> {JobApplicantsNumber}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-gray-500 "> Salary Range:</p>

                <p className="text-gray-500"> ${SalaryRange}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-gray-500 "> Deadline:</p>

                <p className="text-gray-500">
                  {" "}
                  {formatDate(ApplicationDeadline)}
                </p>
              </div>
              <div className="flex justify-start ">
                <button className="btn btn-primary border-none text-white  ">
                  Apply
                </button>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

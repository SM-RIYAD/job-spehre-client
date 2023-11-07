import { Alert } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import JobCards from "./JobCards";
const JobTab = () => {
  const axiosSecure = useAxiosSecure();
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(false);
  const [showjobs, setShowJobs] = useState([]);


  useEffect(() => {

    setloading(true);
    axiosSecure.get("alljobs").then((result) => {
      setJobs(result.data);
      setShowJobs(result.data);
      setloading(false);
    });
  }, [axiosSecure]);

  console.log("this is job array", jobs);
  const handleClickTab = (JobCategory) => {
    const newjobs = jobs.filter((job) => job.JobCategory === JobCategory);
    setShowJobs(newjobs);

    console.log("this is job array after filter ", jobs);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <p className="text-center font-bold my-10 text-4xl">LATEST JOBS </p>
      <Tabs>
        <TabList className="flex flex-wrap justify-center  text-blue-500 font-bold">
          <Tab
            onClick={() => {
              setShowJobs(jobs);
            }}
          >
            All Jobs
          </Tab>
          <Tab
            onClick={() => {
              handleClickTab("Part Time");
            }}
          >
            Part Time
          </Tab>
          <Tab
            onClick={() => {
              handleClickTab("Remote");
            }}
          >
            Remote
          </Tab>
          <Tab
            onClick={() => {
              handleClickTab("OnSite");
            }}
          >
            Onsite
          </Tab>
          <Tab
            onClick={() => {
              handleClickTab("Hybrid");
            }}
          >
            Hybrid
          </Tab>
        </TabList>
        {/* <TabPanel className="border">
          <h2>All Jobs</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part Time</h2>
        </TabPanel>
        <TabPanel>
          <h2>Remote jobs</h2>
        </TabPanel>{" "}
        <TabPanel>
          <h2>onsite jobs </h2>
        </TabPanel>{" "}
        <TabPanel>
          <h2>hybrid jobs</h2>
        </TabPanel> */}
      </Tabs>
{loading? <div className="w-full flex justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>:     <div className="grid mt-10  gap-15 grid-cols-1">
        {showjobs.map((job, idx) => (
          <JobCards job={job} key={idx} />
        ))}
      </div>
          
          
          
          }
  
    </div>
  );
};

export default JobTab;

import React from 'react';

const AppliedJobsBanner = () => {
    return (
        <div className="pb-5">
        <div
          className="hero min-h-[350px] bg-cover"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/human-resources-concept-with-people_23-2150389123.jpg?size=626&ext=jpg&ga=GA1.1.2010618524.1694701074&semt=sph)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl  font-bold">APPLIED JOBS</h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AppliedJobsBanner;
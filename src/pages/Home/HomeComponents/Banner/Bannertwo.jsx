import React from 'react';

const Bannertwo = () => {
    return (
        <div>
             <div  className='bg-opacity-60 bg-cover' style={{backgroundImage: 'url(https://img.freepik.com/free-photo/close-up-workers-with-briefcases_1098-3096.jpg?size=626&ext=jpg&ga=GA1.1.2010618524.1694701074&semt=sph',opacity:.9}} >
<div className="hero min-h-screen bg-opacity-60 hero-overlay  ">
  <div className="hero-content gap-10 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl px-5 text-white font-bold ">LOOKING FOR A JOB?</h1>
      <p className="py-6 px-5 text-white">

      Discover your dream job with Job Sphere! We specialize in connecting talented professionals with top employers. Browse through diverse job listings, effortlessly apply, and propel your career forward. For employers, finding the right candidate has never been easier. Post your job openings and connect with exceptional talent. Your next career move starts here!</p>
    </div>
    <div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl  ">
      <form className="card-body pb-5 ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-xl font-bold text-white">Search a Job!</span>
          </label>
          <input type="text" placeholder="Enter a job name" className="input input-bordered" required />
        </div>
   
        <div className="form-control mt-6">
          <button className="bg-blue-600 btn-primary border-0 text-white btn">Search</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
        </div>
    );
};

export default Bannertwo;
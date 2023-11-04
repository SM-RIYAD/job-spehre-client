

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/close-up-workers-with-briefcases_1098-3096.jpg?size=626&ext=jpg&ga=GA1.1.2010618524.1694701074&semt=sph)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center ">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl text-white font-extrabold">LOOKING FOR A JOB?</h1>
            <p className=" text-white">Discover your dream job with Job Sphere! We specialize in connecting talented professionals with top employers. Browse through diverse job listings, effortlessly apply, and propel your career forward. For employers, finding the right candidate has never been easier. Post your job openings and connect with exceptional talent. Your next career move starts here!</p>
           
            {/* <form className="card-body pb-5 ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-xl font-bold text-white">To Subscribe,</span>
          </label>
          <input type="email" placeholder="Enter your email" className="input input-bordered" required />
        </div>
   
        <div className="form-control mt-6">
          <button className="bg-blue-600 btn-primary border-0 text-white btn">Subscribe</button>
        </div>
      </form> */}
          </div>
        </div>
        
      </div>
    );
};

export default Banner;
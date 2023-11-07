import React from 'react';

const Resumesection = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item h-[500px] bg-gradient-to-r from-cyan-500 to-emerald-500  relative w-full">
 
    <img src="https://img.freepik.com/free-photo/close-up-workers-with-briefcases_1098-3096.jpg?size=626&ext=jpg&ga=GA1.1.2010618524.1694701074&semt=sph" className="w-full opacity-30 " />
    <div className="absolute flex flex-col border  w-full h-full    justify-center items-center lg:p-60 ">
    
        <h1 className='lg:text-6xl text-2xl  text-center font-bold  text-white'>Make a Difference with Your Online Resume!</h1>
  
<button className="btn mt-10 h-[70px]  w-[200px] btn-outline rounded-none hover:bg-emerald-500  text-white hover:border-none  ">Upload Resume</button>

        
  
    
    </div>
  </div> 



</div>
        </div>
    );
};

export default Resumesection;
import React from 'react';

const Resumesection = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item h-[500px] bg-gradient-to-r from-cyan-500 to-emerald-500  relative w-full">
 
    <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww" className="w-full   opacity-30 " />
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
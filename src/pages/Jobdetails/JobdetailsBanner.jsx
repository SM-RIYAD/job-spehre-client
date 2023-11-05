import React from 'react';

const JobdetailsBanner = ({jobPhoto,JobTitle}) => {
    return (
        <div className='pb-20'>
        <div className="hero min-h-[350px] bg-cover" style={{backgroundImage:  `url(${jobPhoto})`}}>
<div className="hero-overlay bg-opacity-80"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-md">
  <h1 className="mb-5 text-5xl  font-bold">{JobTitle}</h1>
 
</div>
</div>
</div>
    </div>
    );
};

export default JobdetailsBanner;
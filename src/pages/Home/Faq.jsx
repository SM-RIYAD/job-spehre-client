import React from 'react';

const Faq = () => {
    return (
        <div className='lg:max-w-6xl mx-auto my-32'>

        <h1 className='lg:text-4xl text-xl p-1 text-center font-bold my-10'>FREQUENTLY ASKED QUESTIONS</h1>
        <div className="join join-vertical w-full">
<div className="collapse collapse-arrow join-item border border-green-500 "> 
<input type="radio"  name="my-accordion-4" checked="checked" /> 
<div className="collapse-title text-xl font-medium">
Is JobSphere free to use for job seekers?
</div>
<div className="collapse-content"> 
  <p>Yes, JobSphere's basic services are completely free for job seekers. You can search for jobs, create a profile, and apply to job listings without any charges. We also offer premium features for users looking for additional benefits.</p>
</div>
</div>
<div className="collapse collapse-arrow join-item border border-base-300">
<input type="radio" name="my-accordion-4" /> 
<div className="collapse-title text-xl font-medium">
How can I search for jobs on JobSphere?
</div>
<div className="collapse-content"> 
  <p>To search for jobs on JobSphere, enter relevant keywords and location preferences in the search bar on the homepage. You can also use filters to refine your search results based on job type, location, and company. Click the search button, and browse through the available job listings.</p>
</div>
</div>
<div className="collapse collapse-arrow join-item border border-base-300">
<input type="radio" name="my-accordion-4" /> 
<div className="collapse-title text-xl font-medium">
Can I upload my resume on JobSphere?
</div>
<div className="collapse-content"> 
  <p>Absolutely! You can upload your resume while creating your JobSphere profile. Having an updated resume allows you to apply for jobs directly through our platform, making the application process convenient for you.</p>
</div>
</div>

<div className="collapse collapse-arrow join-item border border-base-300">
<input type="radio" name="my-accordion-4" /> 
<div className="collapse-title text-xl font-medium">
Is my personal information secure on JobSphere?
</div>
<div className="collapse-content"> 
  <p> Yes, JobSphere takes your privacy and security seriously. We employ advanced security measures to safeguard your data. For more details, please refer to our comprehensive privacy policy to understand how we handle your information.</p>
</div>
</div>
</div>
    </div>
    );
};

export default Faq;
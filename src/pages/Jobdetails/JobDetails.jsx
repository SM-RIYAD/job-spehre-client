import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const{id} = useParams();



    return (
        <div className='max-w-6xl mx-auto'>
            this is job details page {id}
        </div>
    );
};

export default JobDetails;
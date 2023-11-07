import React from 'react';
import Banner from './HomeComponents/Banner';
import Bannertwo from './HomeComponents/Banner/Bannertwo';
import JobTab from './HomeComponents/JobTab';
import PageTitle from '../../Components/PageTitle';

const Home = () => {
    return (
        <div >
    <PageTitle title={"Home"}></PageTitle>
        <Bannertwo/>
        <JobTab/>
        </div>
    );
};

export default Home;
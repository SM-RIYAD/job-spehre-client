import React from 'react';
import Banner from './HomeComponents/Banner';
import Bannertwo from './HomeComponents/Banner/Bannertwo';
import JobTab from './HomeComponents/JobTab';
import PageTitle from '../../Components/PageTitle';
import Resumesection from './HomeComponents/Resumesection';

const Home = () => {
    return (
        <div >
    <PageTitle title={"Home"}></PageTitle>
      <Banner></Banner>
        <JobTab/>
        <Resumesection/>
        </div>
    );
};

export default Home;
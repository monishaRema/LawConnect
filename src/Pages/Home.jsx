import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../Components/header/Banner';
import Lawyers from '../Components/Lawyer/Lawyers';

const Home = () => {
    const lawyersData = useLoaderData()
   
    return (
        <>
        <Banner></Banner>
        <Lawyers lawyersData={lawyersData}></Lawyers>
      
      </>

    );
};

export default Home;
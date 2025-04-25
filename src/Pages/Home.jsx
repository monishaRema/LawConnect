import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../Components/header/Banner';
import Lawyers from '../Components/Lawyers';

const Home = () => {
    const lawyersData = useLoaderData()

   console.log(lawyersData);
   
    return (
        <>
        <Banner></Banner>
        <Lawyers lawyersData={lawyersData}></Lawyers>
      
      </>

    );
};

export default Home;
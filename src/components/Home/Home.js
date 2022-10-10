import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import Topics from '../Topics/Topics';

const Home = () => {
    const LoaderData = useLoaderData();
    const topics = LoaderData.data;
    return (
        <div className='mx-40 mt-20'>
           
            <h1>this is a home page</h1>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-8 sm:gap-4 w-[90%] mx-auto py-12'>
                {
                    topics.map(topic=><Topics key={topic.id} topic={topic} ></Topics>)
                }
            </div>
            
        </div>
    );
};

export default Home;
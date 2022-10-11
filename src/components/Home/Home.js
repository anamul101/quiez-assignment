import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import Topics from '../Topics/Topics';

const Home = () => {
    const LoaderData = useLoaderData();
    const topics = LoaderData.data;
    return (
        <div className='mx-20 mt-20'>
           <div>
                <HeroSection></HeroSection>
           </div>
           <h1 className='lg:text-4xl font-bold text-center text-violet-800'>All Quizs Topics</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:gap-8 sm:gap-4 w-[100%] mx-auto py-12'>
                {
                    topics.map(topic=><Topics key={topic.id} topic={topic} ></Topics>)
                }
            </div>
            
        </div>
    );
};

export default Home;
import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TotalChart from '../TotalChart/TotalChart';

const Statistics = () => {
    const {data} = useLoaderData();
    
    
    return (
        <div className=''>
            <h1 className='text-4xl font-bold my-8 text-center text-violet-800'>Quiz Chart</h1>
            <TotalChart data={data}></TotalChart>
        </div>
    );
};

export default Statistics;
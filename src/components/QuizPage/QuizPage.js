import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {
    const {data} = useLoaderData();
    console.log(data)
    return (
        <div>
           <h1>this is a quisens</h1>
        </div>
    );
};

export default QuizPage;
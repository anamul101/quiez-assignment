import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizPage = () => {
    const data = useLoaderData();
    // console.log(data)
    const {id,name,logo,total,questions}=data.data;
    return (
        <div>
           <div className='mt-12'>
                <h1 className="text-4xl font-bold text-center">Quiz of <span className='text-violet-800'>{name}</span></h1>
                <h1 className="text-2xl font-semibold text-center mt-4">Total Questions: {total}</h1>
           </div>
           <div>
                {
                    questions.map(singlequiz => <SingleQuiz 
                        key={singlequiz.id}
                        singlequiz={singlequiz}
                        ></SingleQuiz>)
                }
           </div>
          
        </div>
    );
};

export default QuizPage;
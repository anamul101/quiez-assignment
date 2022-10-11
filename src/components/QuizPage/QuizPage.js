import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizPage = () => {
    const data = useLoaderData();
    // console.log(data)
    const {id,name,logo,total,questions}=data.data;
    return (
        <div>
           <h1 className="text-2xl font-bold text-center mt-12">Quiz of {name}</h1>
           <h1>questions: {questions.length}</h1>
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
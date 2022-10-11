import React from 'react';
import Options from '../Options/Options';


const SingleQuiz = ({singlequiz}) => {
    const {options,correctAnswer,question,id}=singlequiz;
    
    // console.log(singlequiz);
    return (
        <div className='bg-green-500 my-8 p-8 w-[70%] mx-auto'>
            <h1 className='text-center my-8 text-2xl font-bold'>quiz:{question}</h1>
            <div className=' grid grid-cols-2 gap-4 w-[90%] mx-auto p-4'>
                
                {
                    options.map((qs,idx)=><Options
                     key={idx} 
                     qs={qs} 
                     correctAnswer={correctAnswer}
                     ></Options>)
                }
                
            </div>
        </div>
    );
};

export default SingleQuiz;
import React from 'react';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const SingleQuiz = ({singlequiz}) => {
    const {options,correctAnswer,question,id}=singlequiz;
    const correctAnswerHandela = ()=>{
        toast(correctAnswer);
    }
    // console.log(singlequiz);
    return (
        <div className='bg-violet-800 text-white rounded-md my-8 p-8 w-[70%] mx-auto'>
            <div className='text-right  '>
                <FontAwesomeIcon onClick={()=>correctAnswerHandela()} className='text-white font-4xl font-bold cursor-pointer' icon={faEyeSlash} />
            </div>
            <h1 className='text-center my-8 text-2xl font-bold'>quiz:{question}</h1>
            <div className=' grid lg:grid-cols-2 sm:grid-cols-1 gap-4 w-[90%] mx-auto p-4'>
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
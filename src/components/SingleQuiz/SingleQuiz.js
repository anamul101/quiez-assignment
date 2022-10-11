import React from 'react';
import Options from '../Options/Options';

const SingleQuiz = ({singlequiz}) => {
    const {options,correctAnswer,question,id}=singlequiz;
    const handelaAnsoewr=()=>{
        let message;
        if(correctAnswer){
            message=alert(correctAnswer);
        }
        else if(!correctAnswer){
            message=alert('worng');
        }
        
        return message;
    }
    // console.log(singlequiz);
    return (
        <div className='bg-green-500 my-8 p-8 w-[70%] mx-auto'>
            <h1 className='text-center my-8 text-2xl font-bold'>quiz:{question}</h1>
            <div className=' grid grid-cols-2 gap-4 w-[90%] mx-auto p-4'>
                
                {
                    options.map(qs=><Options qs={qs} handelaAnsoewr={handelaAnsoewr}></Options>)
                }
                
            </div>
        </div>
    );
};

export default SingleQuiz;
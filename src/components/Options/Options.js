import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Options = ({qs,correctAnswer}) => {
    const handelaAnsoewr=()=>{
        // const answer = correctAnswer;
        if(correctAnswer === qs){
            toast.success(correctAnswer) ;
            
        }
        else{
            toast.error("Wrong Answer") ;
        }    
    }
    return (
        <div className='text-md font-bold'>
            <h1  className='border text-left h-20 p-4 flex items-center hover:bg-sky-300'>
                <input onClick={()=>handelaAnsoewr()} type="radio" name="radio-3" className="radio radio-secondary mr-2" checked />{qs}
                <ToastContainer />
            </h1>
            
        </div>
    );
};

export default Options;
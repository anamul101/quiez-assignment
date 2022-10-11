import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Options = ({qs,correctAnswer}) => {
    const handelaAnsoewr=()=>{
        // const answer = correctAnswer;
        if(correctAnswer === qs){
            toast.success("Correct Answer",{autoClose:700}) ;
            
        }
        else{
            toast.warning("Wrong Answer.Please Try Again!",{autoClose:700}) ;
        }    
    }
    return (
        <div className='text-md font-bold'>
            <h1 onClick={()=>handelaAnsoewr()} className='cursor-pointer border text-left p-4 flex items-center hover:bg-violet-400'>
                <input  type="radio" name="radio-3" className="radio radio-secondary text-white mr-2" checked />{qs}
                <ToastContainer />
            </h1>
            
        </div>
    );
};

export default Options;
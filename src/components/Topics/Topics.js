import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Topics = ({topic}) => {
    const {id,name,logo,total}=topic;
    
    return (
        <div>
            <div className="card card-compact w-75 bg-base-200 shadow-xl mb-4">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Quiz: {total}</p>
                    <div className="card-actions justify-end">
                        <Link to = {`/QuizPage/${id}`}>
                            <button className="btn btn-primary mr-2">Start Quiz <FontAwesomeIcon  className='text-white cursor-pointer' icon={faArrowRight} /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topics;
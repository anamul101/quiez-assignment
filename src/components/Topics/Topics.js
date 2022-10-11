import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({topic}) => {
    const {id,name,logo,total}=topic;
    
    return (
        <div>
            <div className="card card-compact w-75 bg-base-200 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Quiz: {total}</p>
                    <div className="card-actions justify-end">
                        <Link to = {`/QuizPage/${id}`}>
                            <button className="btn btn-primary">Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topics;
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage404 = () => {
    const error = useRouteError();
    return (
        <div id='error-page' className='text-center mt-40'>
            <h1 className='text-5xl font-bold text-pink-500'>
                Opps!!
            </h1>
            <p className='text-3xl m-4'>
               Sorry, An Unexpected Error Has Occurred
            </p>
            <p className='text-4xl font-bold text-red-500'>
                <i>{error.statusText || error.message}</i>
            </p>
            <p className='text-4xl font-bold text-red-500'>404</p>
        </div>
    );
};

export default ErrorPage404;
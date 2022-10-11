import React from 'react';

const Options = ({qs}) => {
    return (
        <div className='text-md font-bold'>
            <h1 className='border text-left h-20 p-4 flex items-center hover:bg-sky-300'>
                <input type="radio" name="radio-3" className="radio radio-secondary mr-2" checked />{qs}
            </h1>
        </div>
    );
};

export default Options;
import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const TotalChart = ({data}) => {
    return (
        <div className='lg:ml-80 lg:pl-60 mt-12'>
            <ComposedChart width={390} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis dataKey="total"/>
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Bar dataKey="total" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="total" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default TotalChart;
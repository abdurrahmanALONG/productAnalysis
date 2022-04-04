import React from 'react';
import SpacialBarChart from '../BarChart/SpacialBarChart';
import MyLineChart from '../LineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div>
            <h1>This is our Dashboard</h1>
            <MyLineChart></MyLineChart>
            <SpacialBarChart></SpacialBarChart>
        </div>
    );
};

export default Dashboard;
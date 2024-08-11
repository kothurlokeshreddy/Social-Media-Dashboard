import React from 'react';
import { Pie, Cell, Tooltip, Legend, ResponsiveContainer, PieChart } from 'recharts'; // Importing Recharts components
import Users from '../../users.js'; // Importing users data

import './index.css'; // Importing CSS for styling

const UserActivityPieChart = () => {
  // Preparing data for the pie chart: active vs inactive users
  const data = [
    { name: 'Active Users', value: Users.filter(user => user.isActive).length }, // Counting active users
    { name: 'Inactive Users', value: Users.filter(user => !user.isActive).length }, // Counting inactive users
  ];

  const COLORS = ['#0088FE', '#FF8042']; // Colors for the pie segments

  return (
    <div className='piechart-container'>
      <h1 className='pie-heading'>Active VS Inactive Users</h1>
      <ResponsiveContainer width='100%' height={300}> {/* Ensures responsiveness of the chart */}
        <PieChart data={data}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} // Label showing percentage
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {/* Filling pie segments with colors */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip /> {/* Tooltip shows data details on hover */}
          <Legend /> {/* Legend for the chart */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivityPieChart;

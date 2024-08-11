import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Importing Recharts components
import moment from 'moment'; // Importing moment for date manipulation
import Posts from '../../posts.js'; // Importing posts data

import './index.css'; // Importing CSS for styling

const PostsPerDayBarChart = () => {
  // Grouping posts by date using reduce method
  const postsByDate = Posts.reduce((acc, post) => {
    const date = moment(post.created_at).format('YYYY-MM-DD'); // Formatting post creation date
    if (!acc[date]) acc[date] = 0; // Initialize date key if not present
    acc[date]++; // Increment post count for the date
    return acc;
  }, {});

  // Converting grouped data into array format suitable for Recharts
  const data = Object.keys(postsByDate).map(date => ({
    date,
    posts: postsByDate[date],
  }));

  return (
    <div className='bar-chart'>
      <h1>Posts Per Day</h1>
      <ResponsiveContainer width="100%" height={300}> {/* Ensures responsiveness of the chart */}
        <BarChart data={data} style={{ width: '90%', height: '100%', color: '#ffffff' }}>
          <CartesianGrid strokeDasharray="3 3" /> {/* Adding grid lines */}
          <XAxis dataKey="date" /> {/* X-axis represents dates */}
          <YAxis /> {/* Y-axis represents the number of posts */}
          <Tooltip /> {/* Tooltip shows data details on hover */}
          <Legend /> {/* Legend for the chart */}
          <Bar dataKey="posts" fill="#8481DD" /> {/* Bar representing the number of posts */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PostsPerDayBarChart;

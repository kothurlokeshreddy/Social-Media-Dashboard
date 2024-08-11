// Home / Index.js

import React from 'react';
import { FaUserCircle } from "react-icons/fa"; // Importing user icon
import { MdOutlineArticle } from "react-icons/md"; // Importing article icon

import Header from '../Header'; // Importing Header component
import Users from '../../users.js'; // Importing users data
import Posts from '../../posts.js'; // Importing posts data
import UserActivityPieChart from '../UserActivity/index.js'; // Importing Pie chart component
import PostsPerDayBarChart from '../PostsPerDay/index.js'; // Importing Bar chart component

import './index.css'; // Importing CSS for styling

const Home = () => {
  // Calculate Total Users
  const totalUsers = Users.length;

  // Calculate Total Posts
  const totalPosts = Posts.length;

  // Calculate Users Active in the Last 24 Hours
  const now = new Date('2024-08-08T08:00:00Z'); // Current date and time
  const activeUsersLast24Hours = Users.filter(user => {
    const lastLogin = new Date(user.lastLogin); // User's last login time
    const timeDifference = now - lastLogin; // Time difference between now and last login
    return timeDifference <= 24 * 60 * 60 * 1000; // Checking if the time difference is within 24 hours
  }).length;

  // Calculate Posts Published in the Last 24 Hours
  const postsLast24Hours = Posts.filter(post => {
    const createdAt = new Date(post.created_at); // Post creation time
    const timeDifference = now - createdAt; // Time difference between now and post creation
    return timeDifference <= 24 * 60 * 60 * 1000; // Checking if the time difference is within 24 hours
  }).length;

  return (
    <div className="home-navbar-container">
      <Header /> {/* Rendering Header component */}
      <div className="home-page">
        <h1 className='dashboard-heading'>Dashboard</h1>
        <h2 className='greeting'>Welcome User :-)</h2>
        <div className='kpi-containers'>
          {/* KPI for Total Users */}
          <div className='kpi'>
            <h1 className='kpi-heading'>Total Users</h1>
            <div className='icon-number'>
              <FaUserCircle className='icon'/> {/* User icon */}
              <h1 className='count'>{totalUsers}</h1> {/* Displaying total users */}
            </div>
          </div>
          {/* KPI for Total Posts */}
          <div className='kpi'>
            <h1 className='kpi-heading'>Total Posts</h1>
            <div className='icon-number'>
              <MdOutlineArticle className='icon'/> {/* Post icon */}
              <h1 className='count'>{totalPosts}</h1> {/* Displaying total posts */}
            </div>
          </div>
          {/* KPI for Active Users in 24 Hrs */}
          <div className='kpi'>
            <h1 className='kpi-heading'>Active Users in 24 Hrs</h1>
            <div className='icon-number'>
              <FaUserCircle className='icon'/> {/* User icon */}
              <h1 className='count'>{activeUsersLast24Hours}</h1> {/* Displaying active users in last 24 hours */}
            </div>
          </div>
          {/* KPI for Posts in Last 24 Hrs */}
          <div className='kpi'>
            <h1 className='kpi-heading'>Posts in Last 24 Hrs</h1>
            <div className='icon-number'>
              <MdOutlineArticle className='icon'/> {/* Post icon */}
              <h1 className='count'>{postsLast24Hours}</h1> {/* Displaying posts in last 24 hours */}
            </div>
          </div>
        </div>
        <div className='graph-containers'>
          <UserActivityPieChart /> {/* Rendering Pie chart for user activity */}
          <PostsPerDayBarChart /> {/* Rendering Bar chart for posts per day */}
        </div>
      </div>
    </div>
  );
};

export default Home;

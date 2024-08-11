// PostListing / Index.js

import React, { useState } from 'react';
import Posts from '../../posts.js'; // Importing posts data

import { MdOutlineArticle } from "react-icons/md"; // Importing article icon

import Header from '../Header'; // Importing Header component

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination,
} from '@mui/material';
import { styled } from '@mui/system';

const PostListing = () => {
  // State to manage pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 10; // Number of rows per page

  // Calculate Total Posts
  const totalPosts = Posts.length;

  // Calculate Posts Published in the Last 24 Hours
  const now = new Date('2024-08-08T08:00:00Z');
  const postsLast24Hours = Posts.filter(post => {
    const createdAt = new Date(post.created_at);
    const timeDifference = now - createdAt;
    return timeDifference <= 24 * 60 * 60 * 1000; // Checking if post was created in the last 24 hours
  }).length;

  // Handle page change in pagination
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Paginate posts data
  const paginatedPosts = Posts.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  // Styled components for KPIs using MUI's styled utility
  const KPIBox = styled(Card)({
    background: 'linear-gradient(to right, #0fa4af, #afdde5)',
    color: '#000000',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  });

  const KPIText = styled(Typography)({
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  });

  return (
    <div className='home-navbar-container'>
      <Header /> {/* Rendering Header component */}
      <div className="user-listing-page">
        <h1 className='user-heading'>Post Management</h1>
        <Grid container spacing={3} style={{ marginBottom: '20px' }}>
          {/* KPI for Total Posts */}
          <Grid item xs={12} md={6}>
            <KPIBox>
              <CardContent>
                <KPIText>Total Posts</KPIText>
                <div className='user-icon-number'>
                  <MdOutlineArticle className='user-icon'/> {/* Post icon */}
                  <h1 className='user-count'>{totalPosts}</h1> {/* Displaying total posts */}
                </div>
              </CardContent>
            </KPIBox>
          </Grid>
          {/* KPI for Posts Published in the Last 24 Hours */}
          <Grid item xs={12} md={6}>
            <KPIBox>
              <CardContent>
                <KPIText>Posts Published in the Last 24 Hours</KPIText>
                <div className='user-icon-number'>
                  <MdOutlineArticle className='user-icon'/> {/* Post icon */}
                  <h1 className='user-count'>{postsLast24Hours}</h1> {/* Displaying posts in last 24 hours */}
                </div>
              </CardContent>
            </KPIBox>
          </Grid>
        </Grid>

        {/* Table for displaying post data */}
        <TableContainer component={Paper} style={{ backgroundColor: 'transparent', border: '1px solid #ffffff' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#ffffff' }}>Post ID</TableCell>
                <TableCell style={{ color: '#ffffff' }}>Post Caption</TableCell>
                <TableCell style={{ color: '#ffffff' }}>Media URL</TableCell>
                <TableCell align="center" style={{ color: '#ffffff' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedPosts.map((post) => (
                <TableRow key={post.post_id}>
                  <TableCell style={{ color: '#ffffff' }}>{post.post_id}</TableCell> {/* Displaying post ID */}
                  <TableCell style={{ color: '#ffffff' }}>{post.caption}</TableCell> {/* Displaying post caption */}
                  <TableCell style={{ color: '#ffffff' }}>{post.media_url}</TableCell> {/* Displaying media URL */}
                  <TableCell align="center">
                    {/* Buttons for actions: Delete and Hide */}
                    <Button variant="outlined" color="secondary" style={{ marginRight: '10px' }}>
                      Delete
                    </Button>
                    <Button variant="outlined" color="primary">
                      Hide
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination component */}
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Pagination
            count={Math.ceil(totalPosts / rowsPerPage)} // Total pages
            page={page} // Current page
            onChange={handlePageChange} // Page change handler
            color="secondary"
            style = {{backgroundColor : '#ffffff'}}
          />
        </Grid>
      </div>
    </div>
  );
};

export default PostListing;

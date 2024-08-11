import React, { useState } from 'react';
import Users from '../../users.js'; // Importing users data
import { FaUserCircle } from 'react-icons/fa'; // Importing user icon

import Header from '../Header'; // Importing Header component
import './index.css'; // Importing CSS for styling

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
} from '@mui/material'; // Importing Material-UI components
import { styled } from '@mui/system'; // Importing styled utility from Material-UI

const UserListing = () => {
  // State to manage pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 10; // Number of rows per page

  // Calculate total users
  const totalUsers = Users.length;

  // Calculate active users in the last 24 hours
  const now = new Date('2024-08-08T08:00:00Z');
  const activeUsersLast24Hours = Users.filter(user => {
    const lastLogin = new Date(user.lastLogin);
    const timeDifference = now - lastLogin;
    return timeDifference <= 24 * 60 * 60 * 1000; // Checking if last login was within 24 hours
  }).length;

  // Handle page change in pagination
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Slice users data for current page
  const paginatedUsers = Users.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  // Styled components using MUI's styled utility
  const KPIBox = styled(Card)({
    backgroundImage: 'linear-gradient(to right, #0fa4af, #afdde5)', // Gradient background for KPIs
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
        <h1 className='user-heading'>User Management</h1>
        <Grid container spacing={3} style={{ marginBottom: '20px' }}>
          {/* KPI for Total Users */}
          <Grid item xs={12} md={6}>
            <KPIBox>
              <CardContent>
                <KPIText>Total Users</KPIText>
                <div className='user-icon-number'>
                  <FaUserCircle className='user-icon'/> {/* User icon */}
                  <h1 className='user-count'>{totalUsers}</h1> {/* Displaying total users */}
                </div>
              </CardContent>
            </KPIBox>
          </Grid>
          {/* KPI for Active Users in 24 Hrs */}
          <Grid item xs={12} md={6}>
            <KPIBox>
              <CardContent>
                <KPIText>Users Active in the Last 24 Hours</KPIText>
                <div className='user-icon-number'>
                  <FaUserCircle className='user-icon'/> {/* User icon */}
                  <h1 className='user-count'>{activeUsersLast24Hours}</h1> {/* Displaying active users in last 24 hours */}
                </div>
              </CardContent>
            </KPIBox>
          </Grid>
        </Grid>

        {/* Table for displaying users */}
        <TableContainer component={Paper} style={{ backgroundColor: 'transparent', border: '1px solid #ffffff' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#ffffff' }}>User ID</TableCell>
                <TableCell style={{ color: '#ffffff' }}>Username</TableCell>
                <TableCell style={{ color: '#ffffff' }}>Name</TableCell>
                <TableCell style={{ color: '#ffffff' }}>Email</TableCell>
                <TableCell align="center" style={{ color: '#ffffff' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedUsers.map((user) => (
                <TableRow key={user.user_id}>
                  <TableCell style={{ color: '#ffffff' }}>{user.user_id}</TableCell> {/* Displaying user ID */}
                  <TableCell style={{ color: '#ffffff' }}>{user.username}</TableCell> {/* Displaying username */}
                  <TableCell style={{ color: '#ffffff' }}>{user.name}</TableCell> {/* Displaying name */}
                  <TableCell style={{ color: '#ffffff' }}>{user.email}</TableCell> {/* Displaying email */}
                  <TableCell align="center">
                    {/* Buttons for actions: Edit and Ban */}
                    <Button variant="outlined" color="primary" style={{ marginRight: '10px' }}>
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary">
                      Ban
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination component */}
        <Grid container justifyContent="center" style={{ marginTop: '20px'}}>
          <Pagination
            count={Math.ceil(totalUsers / rowsPerPage)} // Total pages
            page={page} // Current page
            onChange={handlePageChange} // Page change handler
            color="secondary"
            style={{ backgroundColor: '#ffffff' }}
          />
        </Grid>
      </div>
    </div>
  );
};

export default UserListing;

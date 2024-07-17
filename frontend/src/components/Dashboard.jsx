import React from 'react';
import UserDetails from './UserDetails';
import Analytics from './Analytics';
import './Dashboard.css';

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <UserDetails user={data.userDetails} />
      <Analytics data={data} />
    </div>
  );
};

export default Dashboard;
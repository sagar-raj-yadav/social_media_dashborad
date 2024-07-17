import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { FaSearch } from 'react-icons/fa';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://social-media-dashborad.onrender.com/api/social-media-data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="header">
        <p>Social Media Analytics Dashboard</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><FaSearch /></button>
        </div>
      
      <div className="container">
        {data.map((student, index) => (
          <Dashboard key={index} data={student} />
        ))}
      </div>
    </div>
  );
}

export default App;

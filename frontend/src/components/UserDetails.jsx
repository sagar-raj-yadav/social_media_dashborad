import React from 'react';
import './UserDetails.css';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details card">
      <h2>{user.name}</h2>
      <p>Category: {user.category}</p>
      <p>Bio: {user.bio}</p>
      <p>Contact: {user.contactOptions}</p>
      <p>profile picture:<img className="images" src={user.image} alt="profile pictire" /></p>
      <div>
        Links:
        {user.links.map((link, index) => (
          <button key={index} onClick={() => window.open(link, '_blank')}>
            {link}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
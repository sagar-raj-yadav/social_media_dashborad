import React from 'react';
import './Analytics.css';

const Analytics = ({ data }) => {
  return (
    <div className="analytics card">
      <p>Followers: {data.followers}</p>
      <p>Following: {data.following}</p>
      <p>Posts: {data.posts}</p>
      <p>Account Reached: {data.accountReached}</p>
      <p>Account Engaged: {data.accountEngaged}</p>
      <p>Content Shared: {data.contentShared}</p>
      <p>Active Promotions: {data.activePromotions}</p>
      <p>Total Stories: {data.totalStories}</p>
      <p>Total Follows: {data.totalFollows}</p>
      <p>Total Saves: {data.totalSaves}</p>
      <p>Total Comments: {data.totalComments}</p>
      <p>Total Shares: {data.totalShares}</p>
      <div>
        Ads Run:
        {data.adsRun.map((ad) => (
          <p key={ad.id}>{ad.insight}</p>
        ))}
      </div>
    </div>
  );
};

export default Analytics;

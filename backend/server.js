const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;


const corsOptions = {
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

// Dummy data
const students = [
  {
    followers: 1200,
    following: 300,
    posts: 45,
    userDetails: {
      name: 'Sagar Raj',
      category: 'Student',
      bio: 'Love sharing my journey!',
      contactOptions: 'contact@sagarraj.com',
      image: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      links: ['http://sagarraj.com', 'https://www.instagram.com/sagar__.raj/'],
    },
    accountReached: 800,
    accountEngaged: 500,
    contentShared: 30,
    adsRun: [
      { id: 1, insight: 'Ad 1 insight' },
      { id: 2, insight: 'Ad 2 insight' },
    ],
    activePromotions: 2,
    totalStories: 20,
    totalFollows: 1200,
    totalPosts: 45,
    totalSaves: 100,
    totalComments: 200,
    totalShares: 50,
  },
  {
    followers: 900,
    following: 150,
    posts: 30,
    userDetails: {
      name: 'Deepak',
      category: 'Student',
      bio: 'Exploring the world!',
      contactOptions: 'contact@Deepak.com',
      links: ['http://Deepak.com', 'https://www.instagram.com/Deepak_/'],
      image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    accountReached: 600,
    accountEngaged: 400,
    contentShared: 20,
    adsRun: [
      { id: 1, insight: 'Ad insight for John Doe' },
    ],
    activePromotions: 1,
    totalStories: 10,
    totalFollows: 900,
    totalPosts: 30,
    totalSaves: 70,
    totalComments: 150,
    totalShares: 30,
  },
  {
    followers: 1100,
    following: 200,
    posts: 40,
    userDetails: {
      name: 'Akash',
      category: 'Student',
      bio: 'Passionate about tech!',
      contactOptions: 'contact@akash.com',
      links: ['http://akash.com', 'https://www.instagram.com/akash/'],
      image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    accountReached: 750,
    accountEngaged: 450,
    contentShared: 25,
    adsRun: [
      { id: 1, insight: 'Ad 1 insight for Akash' },
    ],
    activePromotions: 1,
    totalStories: 15,
    totalFollows: 1100,
    totalPosts: 40,
    totalSaves: 90,
    totalComments: 180,
    totalShares: 40,
  },
  {
    followers: 1000,
    following: 220,
    posts: 35,
    userDetails: {
      name: 'Shivam',
      category: 'Student',
      bio: 'Learning new things every day!',
      contactOptions: 'contact@shivam.com',
      links: ['http://shivam.com', 'https://www.instagram.com/shivam/'],
      image:"https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    accountReached: 700,
    accountEngaged: 430,
    contentShared: 22,
    adsRun: [
      { id: 1, insight: 'Ad insight for Shivam' },
    ],
    activePromotions: 2,
    totalStories: 18,
    totalFollows: 1000,
    totalPosts: 35,
    totalSaves: 85,
    totalComments: 170,
    totalShares: 35,
  },
  {
    followers: 950,
    following: 180,
    posts: 32,
    userDetails: {
      name: 'Himanshu',
      category: 'Student',
      bio: 'Adventurer at heart!',
      contactOptions: 'contact@himanshu.com',
      links: ['http://himanshu.com', 'https://www.instagram.com/himanshu/'],
      image:"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    accountReached: 650,
    accountEngaged: 400,
    contentShared: 20,
    adsRun: [
      { id: 1, insight: 'Ad insight for Himanshu' },
    ],
    activePromotions: 1,
    totalStories: 12,
    totalFollows: 950,
    totalPosts: 32,
    totalSaves: 75,
    totalComments: 160,
    totalShares: 30,
  },
  {
    followers: 800,
    following: 250,
    posts: 28,
    userDetails: {
      name: 'Inderjeet',
      category: 'Student',
      bio: 'Creative mind!',
      contactOptions: 'contact@inderjeet.com',
      links: ['http://inderjeet.com', 'https://www.instagram.com/inderjeet/'],
      image:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    accountReached: 600,
    accountEngaged: 370,
    contentShared: 18,
    adsRun: [
      { id: 1, insight: 'Ad insight for Inderjeet' },
    ],
    activePromotions: 2,
    totalStories: 10,
    totalFollows: 800,
    totalPosts: 28,
    totalSaves: 70,
    totalComments: 140,
    totalShares: 25,
  },
  {
    followers: 700,
    following: 300,
    posts: 25,
    userDetails: {
      name: 'Kunal',
      category: 'Student',
      bio: 'Always learning!',
      contactOptions: 'contact@kunal.com',
      links: ['http://kunal.com', 'https://www.instagram.com/kunal/'],
      image:"https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    accountReached: 550,
    accountEngaged: 350,
    contentShared: 17,
    adsRun: [
      { id: 1, insight: 'Ad insight for Kunal' },
    ],
    activePromotions: 1,
    totalStories: 8,
    totalFollows: 700,
    totalPosts: 25,
    totalSaves: 65,
    totalComments: 130,
    totalShares: 20,
  },
  {
    followers: 600,
    following: 270,
    posts: 22,
    userDetails: {
      name: 'Lucky',
      category: 'Student',
      bio: 'Aspiring artist!',
      contactOptions: 'contact@lucky.com',
      links: ['http://lucky.com', 'https://www.instagram.com/lucky/'],
      image:"https://images.unsplash.com/photo-1607081692251-d689f1b9af84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww"
    
    },
    accountReached: 500,
    accountEngaged: 320,
    contentShared: 15,
    adsRun: [
      { id: 1, insight: 'Ad insight for Lucky' },
    ],
    activePromotions: 1,
    totalStories: 7,
    totalFollows: 600,
    totalPosts: 22,
    totalSaves: 60,
    totalComments: 120,
    totalShares: 18,
  },
  {
    followers: 500,
    following: 240,
    posts: 20,
    userDetails: {
      name: 'Om',
      category: 'Student',
      bio: 'Tech enthusiast!',
      contactOptions: 'contact@om.com',
      links: ['http://om.com', 'https://www.instagram.com/om/'],
      image:"https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    accountReached: 450,
    accountEngaged: 290,
    contentShared: 14,
    adsRun: [
      { id: 1, insight: 'Ad insight for Om' },
    ],
    activePromotions: 2,
    totalStories: 6,
    totalFollows: 500,
    totalPosts: 20,
    totalSaves: 55,
    totalComments: 110,
    totalShares: 15,
  },
  {
    followers: 400,
    following: 210,
    posts: 18,
    userDetails: {
      name: 'Shyam',
      category: 'Student',
      bio: 'Music lover!',
      contactOptions: 'contact@shyam.com',
      links: ['http://shyam.com', 'https://www.instagram.com/shyam/'],
      image:"https://images.unsplash.com/photo-1577760960310-c49bbb09161e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    accountReached: 400,
    accountEngaged: 260,
    contentShared: 13,
    adsRun: [
      { id: 1, insight: 'Ad insight for Shyam' },
    ],
    activePromotions: 1,
    totalStories: 5,
    totalFollows: 400,
    totalPosts: 18,
    totalSaves: 50,
    totalComments: 100,
    totalShares: 12,
  },
  {
    followers: 300,
    following: 180,
    posts: 15,
    userDetails: {
      name: 'Suraj',
      category: 'Student',
      bio: 'Fitness freak!',
      contactOptions: 'contact@suraj.com',
      links: ['http://suraj.com', 'https://www.instagram.com/suraj/'],
      image:'https://images.unsplash.com/photo-1612681051163-6c1ad652d143?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    accountReached: 350,
    accountEngaged: 230,
    contentShared: 12,
    adsRun: [
      { id: 1, insight: 'Ad insight for Suraj' },
    ],
    activePromotions: 1,
    totalStories: 4,
    totalFollows: 300,
    totalPosts: 15,
    totalSaves: 45,
    totalComments: 90,
    totalShares: 10,
  },
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media Analytics API');
});

app.get('/api/social-media-data', (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

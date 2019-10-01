import React from 'react';
import './App.css';
import Navbar from './components/nav';
import Header from './components/Header.js'
import Profile from './components/Profile';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
        <div>
          ava + discription
        </div>
        <div>
          My Post
          <div>
          New Post
          <div>
          Post 1
        </div>
        <div>
          Post 2
        </div>
        </div>
        </div>
        </div>
  );
}

export default App;

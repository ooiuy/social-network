import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWx-hhuejL92JpnKedsNKvC7uxuvoF2xSC87XWW3LxW1a5LlC"/>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
          </div>
        <div>
          <a>Message</a>
          </div>
          <div>
          <a>New</a>
          </div>
          <div>
          <a>Music</a>
          </div>
        </nav>
        <div className="content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWx-hhuejL92JpnKedsNKvC7uxuvoF2xSC87XWW3LxW1a5LlC"/>
        </div>
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

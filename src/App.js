import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header.js'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      <Dialogs />
      {/* <Profile /> */}
      </div>
      </div>
  );
}

export default App;

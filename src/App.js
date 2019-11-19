import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'
import Music from './components/Music/Music'
import News from './components/News/News'
import Setting from './components/Setting/Setting'
import { addPost } from './Redux/state'



const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/dialogs' render={() => <Dialogs
          state={props.state.dialogsPage} />} />
        <Route path='/profile' render={() => <Profile
          state={props.state.profilePage}
          addPost={props.addPost} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/setting' render={() => <Setting />} />
      </div>
    </div>
  );
}

export default App;

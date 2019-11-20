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



const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/dialogs' render={() => <Dialogs
          dialogsPage={props.state.dialogsPage}
          addMessage={props.addMessage}
          updateNewMessageText={props.updateNewMessageText} />} />
        <Route path='/profile' render={() => <Profile
          profilePage={props.state.profilePage}
          dispatch={props.dispatch} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/setting' render={() => <Setting />} />
      </div>
    </div>
  );
}

export default App;

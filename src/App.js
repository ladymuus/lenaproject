import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import { addPost } from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
        <div className='app-wrapper-content'>
        <Route path='/dialogs' render={()=> <Dialogs state={props.state.dialogsPage}/>}/>
      <Route path='/profile' render={()=> <Profile 
      profilePage={props.state.profilePage} 
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText}/>}/>
      <Route path='/news' render={()=> <News/>} />
      <Route path='/music' render={()=> <Music/>}/>
      <Route path='/settings' render={()=> <Settings/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
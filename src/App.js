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
import { addPost } from './redux/store';

const App = (props) => { //у пропса коллбаки или свойства сидят, а конст является компонентой
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'> 
        <Route path='/dialogs' render={()=> <Dialogs store={props.store}/>}/>
        <Route path='/profile' render={()=> <Profile //роут следит за урлом
          profilePage={props.state.profilePage} //стейт атрибуты со значениями
          dispatch={props.dispatch}/>}/> 
        <Route path='/news' render={()=> <News/>} />
        <Route path='/music' render={()=> <Music/>}/>
        <Route path='/settings' render={()=> <Settings/>}/>
      </div>
    </div>
  );
}

export default App;
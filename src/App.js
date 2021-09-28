import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (<BrowserRouter><div className='app-wrapper'>
    <Header />
    <Nav />
    <div className='app-wrapper-content'>
      <Route path='/dialogs' component={Dialogs} />
      <Route path='/profile' component={Profile}/>
      <Route path='/news' component={News} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
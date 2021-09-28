import React from "react";
import n from './Nav.module.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return(<nav className={n.nav}>
      <div className={n.item}>
        <NavLink to="/profile">Profile</NavLink></div>
      <div className={n.item}>
        <NavLink to="/dialogs">Messages</NavLink></div>
      <div className={n.item}>
        <NavLink to="news">News</NavLink></div>
      <div className={n.item}>
        <NavLink to="/music">Music</NavLink></div>
      <div className={n.item}>
        <NavLink to>Settings</NavLink></div>
    </nav>)
}

export default Nav;
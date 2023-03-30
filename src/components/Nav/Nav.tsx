import React, {useState} from "react";
import classes from "./Nav.module.css";
import {useNavigate} from "react-router-dom";

const Nav = () => {

const navigate = useNavigate()
    const NavigateHandler =(linkname: string) => {
        navigate(linkname)
    }

    return <nav className={classes.nav}>

        <div className={classes.item} onClick={() => {NavigateHandler('profile')}}>Profile</div>

        <div className={classes.item} onClick={() => {NavigateHandler('Messenger')}}>Messenger</div>

        <div className={classes.item} onClick={() => {NavigateHandler('New')}}>New</div>

        <div className={classes.item} onClick={() => {NavigateHandler('Music')}}>Music</div>

        <div className={classes.item} onClick={() => {NavigateHandler('Settings')}}>Settings</div>
    </nav>
};

export default Nav;
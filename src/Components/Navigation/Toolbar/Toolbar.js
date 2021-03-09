import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navbar from '../NavigationItems/NavigationItems'
import ToggleMenu from '../SideDrawer/ToogleMenu/ToggleMenu'

const toolbar = props => <header className={classes.Toolbar}>
    <ToggleMenu toggle={props.toggle} />
    <div className={classes.Logo}>
        <Logo />
    </div>
    <nav className={classes.DestopOnly}>
        <Navbar />
    </nav>
</header>

export default toolbar
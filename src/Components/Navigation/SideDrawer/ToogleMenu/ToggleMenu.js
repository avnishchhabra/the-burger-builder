import React from 'react'
import classes from './ToggleMenu.module.css'

const toggleMenu = props => <div
    onClick={props.toggle}
    className={classes.DrawerToggle}>
    
    <div></div>
    <div></div>
    <div></div>
</div>

export default toggleMenu
import React from 'react'
import NavigationItem from './NavigationItem/NaviagtionItem'
import classes from './NavigationItems.module.css'

const navigationItems = () =>
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/Orders">Orders</NavigationItem>
    </ul>


export default navigationItems
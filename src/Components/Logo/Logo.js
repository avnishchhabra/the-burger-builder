import React from 'react'
import LogoPath from '../Assets/Images/burger-logo.png'
import classes from './Logo.module.css'

const logo = props => <div className={classes.Logo} style={{height :props.height}}>
    <img src={LogoPath} alt="MyBurger" />
</div>

export default logo
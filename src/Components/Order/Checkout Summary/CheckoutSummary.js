import React from 'react'
import Burger from '../../Burger/Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const checkoutSummary = props => {
    return <div className={classes.CheckoutSummary}>
        <h1>We hope this burger will make your day!</h1>
        <div style={{height:'450px', margin:'auto', textAlign:'center'}}>
            <Burger ingredients={props.ingredients} />
        </div>
        <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
    </div>
}

export default checkoutSummary;
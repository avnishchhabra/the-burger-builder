import React from 'react'
import classes from './Order.module.css'

const order = props => {
    const ingredientsOut = []
    for(let ig in props.ingredients){
        ingredientsOut.push({
            name: ig,
            amount: props.ingredients[ig]
        })
    }
    const ingredientsOutput = ingredientsOut.map(ing => {
        return <span 
        key={ing.name}
        style={{border:'1px solid #eee', padding:'5px', margin:'10px'}}>
            {ing.name} : {ing.amount + ' '}    
        </span>
    })
    return <div className={classes.Order}>
        <h4>Ingredients: {ingredientsOutput}</h4>
        <strong>Price:{props.price}</strong>
    </div>
}

export default order
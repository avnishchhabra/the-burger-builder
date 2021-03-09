import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Price : <strong>{props.price}</strong></p>
        {controls.map(ctrl => {
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                addIng={() => props.addIng(ctrl.type)}
                removeIng={() => props.removeIng(ctrl.type)}
                disable={props.disable[ctrl.type]} />
        })}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.orderButtonShow}
        >ORDER NOW
        </button>
    </div>
)

export default buildControls

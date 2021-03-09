import React ,{Component} from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
import {Link} from 'react-router-dom'

class OrderSummary extends Component {
    componentDidUpdate(){
        console.log("[Ordersummary didUpdate]")
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((ing) => {
            return <li key={ing}>
                <span style={{ textTransform: 'capitalize' }}>{ing}</span> : {this.props.ingredients[ing]}
            </li>
        })
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A burger with following ingredients:-</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.cancelPurchase}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.continuePurchase}>CONTINUE</Button>
        </Aux>
        )
    }
}

export default OrderSummary
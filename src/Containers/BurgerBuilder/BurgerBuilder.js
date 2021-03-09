import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from './../../Components/Burger/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../Components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENTS_PRICE = {
    salad: 2,
    bacon: 3,
    cheese: 5,
    meat: 4
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        purchaseble: false,
        price: 5,
        orderButtonClick: false,
        spinner: false
    }

    orderButtonState = () => {
        this.setState({orderButtonClick: true})
    }
    cancelPurchase = () => {
        this.setState({orderButtonClick: false})
    }
    continuePurchase = () => {
        const queryParam = [];
        for(let i in this.state.ingredients) {
            queryParam.push(i + '=' + this.state.ingredients[i])
        }
        queryParam.push('price=' + this.state.price)
        const joinQueryParam = queryParam.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?'+joinQueryParam
        })
    }

    updatePurchaseState = (updatedIngredients) => {

        const sum = Object.keys(updatedIngredients)
            .map(ig => {
                return updatedIngredients[ig];
            })
            .reduce((val, curVal) => {
                return val + curVal;
            })
        this.setState({ purchaseble: sum > 0 })
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceToBeAdd = INGREDIENTS_PRICE[type]
        const oldPrice = this.state.price
        const newPrice = oldPrice + priceToBeAdd
        this.setState({
            ingredients: updatedIngredients,
            price: newPrice
        })
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceToBeLess = INGREDIENTS_PRICE[type]
        const oldPrice = this.state.price
        const newPrice = oldPrice - priceToBeLess
        this.setState({
            ingredients: updatedIngredients,
            price: newPrice
        })
        this.updatePurchaseState(updatedIngredients)
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        let contentOfModal = <OrderSummary 
        price={this.state.price}
        ingredients={this.state.ingredients}
        cancelPurchase={this.cancelPurchase}
        continuePurchase={this.continuePurchase}/>
        if(this.state.spinner) {
            contentOfModal = <Spinner />
        }
        return <Aux>
            <Burger ingredients={this.state.ingredients} />
            <Modal showModal={this.state.orderButtonClick}
            modalClosed={this.cancelPurchase}>
                {contentOfModal}
            </Modal>
            <BuildControls
                addIng={this.addIngredientHandler}
                removeIng={this.removeIngredientHandler}
                disable={disableInfo}
                purchasable={this.state.purchaseble}
                orderButtonShow={this.orderButtonState}
                price={this.state.price} />
        </Aux>
    }
}

export default withErrorHandler(BurgerBuilder, axios)
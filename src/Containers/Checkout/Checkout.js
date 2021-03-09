import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/Checkout Summary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { Route } from 'react-router-dom'

export class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: null
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let totalPrice = 0;
        for (let entry of query.entries()) {
            // console.log(entry)
            if(entry[0] == "price") {
                totalPrice = entry[1]
            }
            else {
            ingredients[entry[0]] = +entry[1]
            }}
        this.setState({ ingredients: ingredients, totalPrice: totalPrice })

    }
    checkoutCancelled = () => {
        this.props.history.goBack();
    }
    checkoutContinued = () => {
        this.props.history.push(this.props.match.url + '/contact-data')
    }
    render() {

        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued} />
                <Route path={this.props.match.url + '/contact-data'}
                    render={(props) => <ContactData
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        {...props}
                    />} />
            </div>
        )
    }
}

export default Checkout

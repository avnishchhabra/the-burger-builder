import React, { Component } from 'react'
import Button from '../../../Components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../Components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            pincode: ''
        },
        spinner: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        this.setState({ spinner: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            delivery: 'fastest',
            customer: {
                name: 'Avnish',
                address: '#34/6 khadi ashram',
                phone_number: 9306467463
            }
        }
        axios.post('./orders.json', order)
            .then(response => {
                this.setState({ spinner: false})
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ spinner: false})
            })
    }

    render() {
        let form = (<form>
            <input type="text" name="name" placeholder="your name" />
            <input type="email" name="email" placeholder="your email" />
            <input type="text" name="street" placeholder="Steet" />
            <input type="text" name="pincode" placeholder="Pincode" />
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>)
        if (this.state.spinner) {
            form = <Spinner />
        }
        return (
            <div>
                <h3>Enter shipping details</h3>
                {form}
            </div>
        );
    }
}

export default ContactData
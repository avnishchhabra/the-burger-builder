import axios from '../../axios-orders'
import React,{Component} from 'react'
import Order from '../../Components/Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component{
    state = {
        orders: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/orders.json')
         .then(res => {
             console.log(res.data)
             const orders = []
             for(let key in res.data){
                 orders.push({
                    ...res.data[key],
                    id: key
                 })
             }
             this.setState({loading: false, orders: orders})
             console.log(this.state.orders)
         })
         .catch(err => {
            this.setState({loading: false})
         })
    }
    render(){
        return (
            <div>
                {this.state.orders.map(order => <Order 
                key={order.id} 
                ingredients={order.ingredients}
                price={order.price}/>)}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios)
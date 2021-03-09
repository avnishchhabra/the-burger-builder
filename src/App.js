
import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders'
import {Route} from 'react-router-dom'

function App() {
  return (<Layout>
    <Route path="/" exact component={BurgerBuilder} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/orders" component={Orders} />
  </Layout>);
}

export default App;

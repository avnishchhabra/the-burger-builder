import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-27c56-default-rtdb.firebaseio.com//'
})

export default instance
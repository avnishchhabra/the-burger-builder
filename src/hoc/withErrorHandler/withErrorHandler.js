import React, { Component } from 'react'
import Modal from '../../Components/UI/Modal/Modal'
import Aux from '../Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            })
        }
        closeModal = () => {
            this.setState({error: null})
        }
        render() {
            return <Aux>
                <Modal
                    showModal={this.state.error}
                    modalClosed={this.closeModal}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
        }
    }
}

export default withErrorHandler
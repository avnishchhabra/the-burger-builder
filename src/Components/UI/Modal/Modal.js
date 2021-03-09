import React, { Component } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxiliary'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showModal !== this.props.showModal || nextProps.children !== this.props.children;
    }
    componentDidUpdate() {
        console.log("[Modal] did update")
    }
    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.showModal}
                    backdropClicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.showModal ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux >)
    }
}



export default Modal
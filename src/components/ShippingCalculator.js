import React, { Component } from 'react'

import '../styles/Checkout.css'

class ShippingCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {state: this.props.product.state}
    }



    render() {
        return (
            <div className='shipping-calc-panel panel inline'>
                <div className='panel-header'>
                    <h3>{this.props.product.name}</h3>
                </div>
                <div className='panel-content'>
                    <p>Price: ${this.props.product.price}</p>
                    <p>S&H: ${this.calculateShipping()}</p>
                    <hr />
                    <p><b>Total: {this.orderTotal()}</b></p>
                </div>
            </div>
        )
    }
}

export default ShippingCalculator
import React, { Component } from 'react';

import Db from './db/Products'
// import CheckoutForm from './components/CheckoutForm'
// import ShippingCalculator from './components/ShippingCalculator'
import './styles/Checkout.css'

class Checkout extends Component  {
    constructor(props) {
        super(props);
        const db = new Db();
        const shippingCost = 5.99;
        const product = db.products[this.props.match.params.productId];
        this.state = {shippingCost: shippingCost, total: shippingCost + product.price,  product: product};
        this.shippingStateChange = this.shippingStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    shippingStateChange(evt) {
        var shippingCost = this.calculateShipping(evt.target.value)
        this.setState({shippingCost: shippingCost, total: shippingCost + this.state.product.price});
    }

    handleSubmit(evt) {
        console.log()
    }

    states() {
        return (
            ['','AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
        )
    }

    findProduct() {

    }

    calculateShipping(state) {
        const baseCost = 5.99;
        let shipCost = 0;

        switch(state) {
            case 'MN':
                shipCost;
                break;
            case 'CA':
            case 'MA':
            case 'NY':
                shipCost = baseCost + 7.50;
                break;
            case 'AL':
            case 'FL':
            case 'GA':
                shipCost = 3.99;
                break;
            default:
                shipCost = 5.99;
        }
        return shipCost;
    }

    orderTotal() {
        return `$${this.state.product.price + this.calculateShipping()}`
    }

    render() {
        const product = this.findProduct();
        return (
            <div className='checkout-wrapper'>
                <div className='calculator-wrapper inline'>
                    <div className='shipping-calc-panel panel inline'>
                        <div className='panel-header'>
                            <h3>{this.state.product.name}</h3>
                        </div>
                        <div className='panel-content'>
                            <p>Price: ${this.state.product.price}</p>
                            <p>S&H: ${this.state.shippingCost}</p>
                            <hr />
                            <p><b>Total: ${this.state.total}</b></p>
                        </div>
                    </div>
                </div>

                <div className='form-wrapper inline'>
                    <div className='form-panel panel inline'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='flex-row'>
                                <div className='flex-item'>
                                    <label>
                                        Name
                                        <br />
                                        <input type='text' required='true'/>
                                    </label>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-item'>
                                    <label>
                                        Street
                                        <br />
                                        <input type='text' required='true'/>
                                    </label>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-item'>
                                    <label>
                                        City
                                        <br />
                                        <input type='text' required='true' />
                                    </label>
                                </div>
                                <div className='flex-item'>
                                    <label>
                                        State
                                        <br />
                                        <select onChange={this.shippingStateChange} required='true'>
                                            {this.states().map((state) => <option value={state}>{state}</option> )}
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-item'>
                                    <label>
                                        Zip Code
                                        <br />
                                        <input type='number' minLength='5' maxLength='5' min='00001' max='99999'/>
                                    </label>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-item'>
                                    <input type='submit' value='Submit' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Checkout
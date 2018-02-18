import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
import Db from './db/Products';
import ThankYou from './ThankYou';
// import CheckoutForm from './components/CheckoutForm'
// import ShippingCalculator from './components/ShippingCalculator'
import './styles/Checkout.css'

class Checkout extends Component  {
    constructor(props) {
        super(props);
        const db = new Db();
        const shippingCost = 5.99;
        const product = db.products[this.props.match.params.productId];
        this.formFields = {
            name:'',
            streetAddress:'',
            city:'',
            state:'',
            zipCode:''
        };
        this.state = {shippingCost: shippingCost, total: shippingCost + product.price,  product: product, shippingForm: this.formFields, submitted: false};
        this.shippingStateChange = this.shippingStateChange.bind(this);
        this.updateFormValues = this.updateFormValues.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    shippingStateChange = (evt) => {
        let shippingCost = this.calculateShipping(evt.target.value);
        this.formFields.state = evt.target.value;
        this.setState({shippingCost: shippingCost, total: shippingCost + this.state.product.price, shippingForm: this.formFields});
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        let valid = true;
        const formValues = this.state.shippingForm;

        Object.keys(formValues).map((key, i) => {
            let val = formValues[key].trim();
            if(key === 'zipCode'){
                if(val.toString().length !== 5){
                    valid = false;
                }
            }
            else if(val.length < 0 || val === ''){
                valid = false;
            }
        });

        if(valid) {
            // this.setState({submitted: true})
            this.props.history.push(
                {
                    pathname: '/thank-you',
                    state: this.state
                })
        }
    };

    states = () => {
        return (
            ['','AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
        )
    }

    calculateShipping = (state) => {
        const baseCost = 5.99;
        let shipCost;

        if (state === 'MN') {
            shipCost = 0.00;
        }
        else if (['CA', 'MA', 'NY'].indexOf(state) > -1) {
            shipCost = baseCost + 7.50;
        }
        else if (['AL', 'FL', 'GA'].indexOf(state) > -1) {
            shipCost = 3.99;
        }
        else {
            shipCost = 5.99;
        }

        return shipCost;
    };

    updateFormValues = (evt) => {
        this.formFields[evt.target.name] = evt.target.value;
        this.setState({shippingForm: this.formFields});
    };

    render() {
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
                                        <input name='name' value={this.state.shippingForm.name} type='text' onChange={this.updateFormValues} required/>
                                    </label>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-item'>
                                    <label>
                                        Street Address
                                        <br />
                                        <input name='streetAddress' value={this.state.shippingForm.streetAddress} type='text' onChange={this.updateFormValues} required/>
                                    </label>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-item'>
                                    <label>
                                        City
                                        <br />
                                        <input name='city' value={this.state.shippingForm.city} type='text' onChange={this.updateFormValues} required />
                                    </label>
                                </div>
                                <div className='flex-item'>
                                    <label>
                                        State
                                        <br />
                                        <select name='state' value={this.state.shippingForm.state} onChange={this.shippingStateChange} required>
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
                                        <input
                                            className= {this.state.shippingForm.zipCode.length > 0 && this.state.shippingForm.zipCode.length !== 5? "alert" : "" }
                                            name='zipCode'
                                            value={this.state.shippingForm.zipCode}
                                            type='number'
                                            minLength='5'
                                            maxLength='5'
                                            onChange={this.updateFormValues}/>
                                    </label>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-item'>
                                    <input className='submit-button button' type='submit' value='Submit' />
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
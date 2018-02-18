import React, { Component } from 'react';
import './styles/thankyou.css';

class ThankYou extends Component {
    constructor(props) {
        super();
        this.order = {address: props.location.state.shippingForm, shippingCost: props.location.state.shippingCost, total: props.location.state.total, product: props.location.state.product};
    }
    render() {
        return(
            <div className="thank-you-container">
                <div className="panel thank-you-panel inline">
                    <div className="panel-header">
                        <h1>Thank You For Your Order,<br />{this.order.address.name}!</h1>
                    </div>
                    <div className="panel-content">
                        <div className="details-wrapper">
                            <div className="detail-row">
                                <div className="detail-item inline"><b>Address: </b></div>
                                <div className="detail-item inline"><address>{this.order.address.streetAddress}<br />{this.order.address.city}, {this.order.address.state} {this.order.address.zipCode}</address></div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-item inline"><b>Product:</b></div>
                                <div className="detail-item inline">{this.order.product.name}</div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-item inline"><b>Price:</b></div>
                                <div className="detail-item inline">${this.order.product.price}</div>
                            </div>
                            <div className="detail-row border-bottom">
                                <div className="detail-item inline"><b>S & H:</b></div>
                                <div className="detail-item inline">${this.order.shippingCost}</div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-item inline"><b>Total: </b></div>
                                <div className="detail-item inline">${this.order.total}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankYou
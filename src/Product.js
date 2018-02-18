import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './styles/Storefront.css'
class Product extends Component {

    renderFeatures(){
        return (
            this.props.product.features.map((feature) => (
                <li key={feature}>{feature}</li>
            ))
        )
    }

    render() {
        return (
            <div className="product-panel panel inline">
                <div className="panel-header">
                    <h3>{this.props.product.name}</h3>
                </div>
                <div className="panel-content">
                    <div className="product-price">
                        <h4>
                            ${this.props.product.price}
                        </h4>
                    </div>
                    <div className="product-features">
                        <ul>
                            {this.renderFeatures()}
                        </ul>
                    </div>
                    <div className='buy-product'>
                        <Link to={`/products/${this.props.product._id}/checkout`} >
                            <button className='buy-button button' >Buy</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
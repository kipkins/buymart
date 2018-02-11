import React, { Component } from 'react';
import Product from './Product'
import Db from './db/Products'

class Market extends Component {
    renderProducts() {
        const db = new Db();
        return (
            Object.keys(db.products).map((id) => (
                    <Product key={id} product={db.products[id]} />
                )
            ))
    }

    render() {
        console.log(this.props);
        return (
            <div className="product-container">
                {this.renderProducts()}
                {/*<Match pattern="/products/:productId/checkout" component={Checkout} />*/}
            </div>
        )
    }
}

export default Market


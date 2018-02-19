import React, { Component } from 'react';

import Product from './Product';
import Db from './db/Products';

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
        return (
            <div className='product-container'>
                {this.renderProducts()}
                <p>All products come with a 30 day money back guarantee.</p>
            </div>
        )
    }
}

export default Market


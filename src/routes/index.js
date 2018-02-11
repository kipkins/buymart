import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Checkout from '../Checkout';
import Market from '../Market'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Market {...props} />} />
            <Route path="/market" exact render={props => <Market {...props} />} />
            <Route path="/products/:productId/checkout" exact render={props => <Checkout {...props}/>} />
        </Switch>
    </BrowserRouter>
)
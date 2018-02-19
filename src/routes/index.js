import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Checkout from '../Checkout';
import Market from '../Market';
import ThankYou from '../ThankYou';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact render={props => <Market {...props} />} />
            <Route path='/market' exact render={props => <Market {...props} />} />
            <Route path='/products/:productId/checkout' exact render={props => <Checkout {...props}/>} />
            <Route path='/thank-you' exact render={props => <ThankYou {...props}/>} />
        </Switch>
    </BrowserRouter>
)
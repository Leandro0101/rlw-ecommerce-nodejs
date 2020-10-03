import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './pages/about';
import Login from './pages/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
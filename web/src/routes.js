import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './pages/about';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/about" component={About} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
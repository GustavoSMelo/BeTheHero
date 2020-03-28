import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../views/login';
import Registre from '../views/registre';
import Home from '../views/main';
import NewIncident from '../views/newIncident';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/registre" component={Registre} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/new/incident" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

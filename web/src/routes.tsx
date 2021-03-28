import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Occurrences from './pages/Occurrences';
import OccurrencesId from './pages/OccurrencesId';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/map" exact component={Map} />
                <Route path="/occurrences" exact component={Occurrences} />
                <Route path="/occurrences/:id" exact component={OccurrencesId} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

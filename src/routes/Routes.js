import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Paths from './Paths';

const Routes = () => {
    return (
        <Switch>
            {
                Paths.map((route, number) =>
                    <Route key={number} path={route.path} exact render={(routeProps) => (
                        <route.component key={number} {...routeProps} {...route.props}/>)}
                    />
                )
            }
        </Switch>
    );
}

export default Routes

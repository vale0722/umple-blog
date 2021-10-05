import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import { guest, auth } from "../constants";

const Routes = () => {
  return (
    <Switch>
      {guest.map((route, number) => (
        <Route
          key={number}
          path={route.path}
          exact
          render={(routeProps) => (!localStorage.getItem('user') ? (
                  <route.component key={number} {...routeProps} {...route.props} />
              ) : <Redirect to={{pathname: "/auth/home", state: {from: routeProps.location}}}/>
          )}
        />
      ))}
      {
        auth.map((route, number) => (
            <Route
                key={number}
                path={route.path}
                exact
                render={(routeProps) => (localStorage.getItem('user') ? (
                        <route.component key={number} {...routeProps} {...route.props} />
                    ) : <Redirect to={{pathname: "login", state: {from: routeProps.location}}}/>
                )}
            />
        ))
      }
    </Switch>
  );
};

export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, SignUp, Home } from "../pages";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/home" component={Home} />
      <Route render={() => <h1>NOT FOUND</h1>} />
    </Switch>
  );
}

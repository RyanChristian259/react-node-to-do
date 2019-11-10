import React from "react";
import { Redirect } from "react-router";
import { store } from "../store";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
// import { ConnectedLogin } from './Login'
// import { ConnectedSignup } from './Signup'
// import { ConnectedTaskDetail } from './TaskDetail'
import { history } from "../store/history";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
      </div>
    </Provider>
  </Router>
);

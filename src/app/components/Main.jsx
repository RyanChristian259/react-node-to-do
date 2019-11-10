import React from "react";
import { Redirect } from "react-router";
import { store } from "../store";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import { history } from "../store/history";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
        <Route
          exact
          path="/task/:id"
          render={({ match }) => <ConnectedTaskDetail match={match} />}
        />
      </div>
    </Provider>
  </Router>
);

/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history.js";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import LoginPage from "views/LoginPage/LoginPage";
import Registration from "views/Registration/Registration.js";
import ProtectedLoginRoute from "RouteProtection/ProtectedLoginRoute"


ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <ProtectedLoginRoute path="/auth/login-page" component={LoginPage}/>
      <ProtectedLoginRoute path="/auth/registration-page" component={Registration}/>
      <Redirect from="/" to="/auth/login-page" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

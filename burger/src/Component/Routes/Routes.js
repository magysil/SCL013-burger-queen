// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "../App.js";
import Home from "../Home/index.js";
import Meseros from "../Meseros/index.js";
import Cocina from "../Cocina/index.js";
import Entregas from "../Entregas/index.js";
import Page404 from "../Page404/page404.js";
//import Content from "./Component/Global/Content.js"

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/meseros" component={Meseros} />
      <Route exact path="/cocina" component={Cocina} />
      <Route exact path="/entregas" component={Entregas} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;

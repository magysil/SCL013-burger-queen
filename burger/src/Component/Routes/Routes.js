/* eslint-disable no-unused-vars */
// Dependencies
import React from "react";
import { Switch } from "react-router-dom";

// Components
import App from "../App.js";
import Home from "../Home/index.js";
import Meseros from "../Meseros/index.js";
import Cocina from "../Cocina/index.js";
import Entregas from "../Entregas/index.js";
import Page404 from "../Page404/page404.js";
import Layout from "../Layout";
//import Content from "./Component/Global/Content.js"

const AppRoutes = () => (
  <App>
    <Switch>
      <Layout exact path="/" component={Home} />
      <Layout exact path="/meseros" component={Meseros} />
      <Layout exact path="/cocina" component={Cocina} />
      <Layout exact path="/entregas" component={Entregas} />
      <Layout component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';

import { Navbar, Content } from "../Components/Core";
import Welcome from "../Views/WelcomeContainer";

export const AppRouter = () => {
  return (
    <Router>
      <Layout className="layout">
        <Navbar />
        <Content>
          <Switch>
            <Route exact path="/" component={Welcome} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default AppRouter;

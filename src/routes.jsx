import { Redirect, Route, Switch } from "react-router-dom";

import Layout from './components/templates/layout/layout.template.jsx';
import React from "react";
import Search from './pages/search.page.jsx';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Redirect from="/**" exact to="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;

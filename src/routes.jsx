import { Redirect, Route, Switch } from "react-router-dom";

import ItemsPage from './pages/items/items.page.jsx';
import Layout from './components/templates/layout/layout.template.jsx';
import React from "react";
import SearchPage from './pages/search/search.page.jsx';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/items" component={ItemsPage}/>
        <Route exact path="/" component={SearchPage}/>
        <Redirect from="/**" exact to="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;

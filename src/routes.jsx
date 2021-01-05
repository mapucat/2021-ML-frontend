import { Redirect, Switch } from "react-router-dom";

import React from "react";

const Routes = () => {
  return (
    <Switch>
      <Redirect from="/**" exact to="/" />
    </Switch>
  );
};

export default Routes;

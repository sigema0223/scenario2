// router.js
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./home/Home.js";
import Catalogue from "./catalogue/Catalogue.js";
import Learn from "./course/Course.js";

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/catalogue" component={Catalogue}>
        {/* {sessionStorage.getItem("state") ? <Redirect to="/" /> : undefined} */}
      </Route>
      <Route path="/learn" component={Learn}>
        {/* {!sessionStorage.getItem("state") ? (
          <Redirect to="/login" />
        ) : undefined} */}
      </Route>
    </Switch>
  </main>
);

export default Routes;

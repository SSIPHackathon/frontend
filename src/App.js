import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./Containers/Admin";
import Citizen from "./Containers/Citizen";
import Contect from "./Containers/Contect";

import Home from "./Containers/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Citizen">
      <Citizen/>
      </Route>
      <Route exact path="/contect-us">
      <Contect/>
      </Route>
      <Route exact path="/admin-login">
      <Admin/>
      </Route>
    </Switch>
  );
};
export default App;

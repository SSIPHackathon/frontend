import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./Containers/Admin";
import Citizen from "./Containers/Citizen";
import Contect from "./Containers/Contect";
import QRCode from "./Containers/QRCode/QRCode";
import Feedback from "./Containers/FeedBack/Feedback";
import Thank from "./Containers/Thank";

import Home from "./Containers/Home";
// import Admin from "./Containers/Admin";
import Analytics from "./Containers/Analytics/Analytics";
import Overview from "./Containers/Overview/Overview";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/overview">
        <Overview />
      </Route>
      <Route exact path="/analytics">
        <Analytics />
      </Route>
      <Route exact path="/qrcode">
        <QRCode />
      </Route>
      <Route exact path="/Citizen">
        <Citizen />
      </Route>
      <Route exact path="/contect-us">
        <Contect />
      </Route>
      {/* <Route exact path="/admin-login">
        <Admin />
      </Route> */}
      <Route exact path="/feedback">
        <Feedback />
      </Route>
      <Route exact path="/thank-you">
        <Thank />
      </Route>
    </Switch>
  );
};
export default App;

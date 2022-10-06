import React from "react";

import { Switch, Route } from "react-router-dom";

// import Home from "./Containers/Home";
import Admin from "./Containers/Admin";
import Analytics from "./Containers/Analytics/Analytics";
import Overview from "./Containers/Overview/Overview";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        {/* <Home /> */}
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
    </Switch>
  );
};
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import QRAnimation2 from './components/QRAnimation2';

// function App() {
//   return (
//  <div className="App">
//    <QRAnimation2/>
//  </div>
//  );
// }

// export default App;
export default App;

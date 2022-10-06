import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
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

import React from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      

      <Navbar />
      <Switch></Switch>
    </Router>
  );
}

export default App;

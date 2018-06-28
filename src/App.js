import React from 'react';
// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import API from "./utils/API";
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Requests from "./pages/Requests"
import DetailedRequest from "./pages/DetailedRequest"

// import Login from "./components/Login/Login"





const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/requests" component={Requests} />
        <Route exact path="/requests/:id" component={DetailedRequest} />

      </Switch>
    </div>

  </Router>
);











export default App;


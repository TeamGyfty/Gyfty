// import React, { Component } from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";
// import Login from "./components/Login/Login"
import Amplify from "aws-amplify"
// import { withAuthenticator } from "aws-amplify-react";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


ComponentDidMount() {

}

export default App;

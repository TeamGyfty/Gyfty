import React, { Component } from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";
// import Login from "./components/Login/Login"


class App extends Component {

  state ={
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
  // list of requests
  requests: []



  componentDidMount() {
    this.populateData();
  }
  populateData = () => {
    this.getRequests();
  }

  getRequests = () => {
    API.getRequests().then((res) => {
      let newRequests = results.data
      this.setState({ requests: newRequests })
    }).catch(err => {
      if (err) throw (err)
    })
  }

}

export default App;

import React, { Component } from 'react';
// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import API from "./utils/API";
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Requests from "./components/Requests.js"
import DetailedRequest from "./components/DetailedRequest.js"

// import Login from "./components/Login/Login"





// const App = () => (
//   <Router>
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Body} />
//         <Route exact path="/requests" component={Requests} />
//         <Route exact path="/requests/:id" component={DetailedRequest} />

//       </Switch>
//     </div>

//   </Router>
// );


class App extends Component {
  state = {
    requests: {}
  }



componentDidMount() {
  this.populateData();
}

populateData() {
  this.getRequests();
}

  getRequests = () => {
    API.getRequests().then(res => {
      let newRequest = res.populateData
      this.setState({ requests: newRequest }, () => {

      })
    }).catch(err => {
      if (err) throw (err)
    })
  }

}








export default App;


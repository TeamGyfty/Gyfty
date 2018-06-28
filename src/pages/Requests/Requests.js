import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Requests extends Component {
  state = {
	requests: [],
	name: "",
	age: "",
	price: "",
	occasion: ""
  };

  componentDidMount() {
  	this.loadRequests();
  }

  loadRequests = () => {
  	API.getRequests()
  	  .then(res =>
  	  	this.setState({ requests: res.data, name: "", age: "", price: "", occasion: ""})
  	  	)
  	  .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.age && this.state.price) {
      API.saveRequest({
        name: this.state.name,
        age: this.state.age,
        price: this.state.price,
        occasion: this.state.occasion
      })
        .then(res => this.loadRequests())
        .catch(err => console.log(err));
    }
  };

  render() {
  	return
  	  <div>
  	    {this.state.requests.length ? (
  	      <div className="list-overflow-container">
      	    <ul className="list-group">
              {children}







              
            </ul>
          </div>

  	        {this.state.requests.map(request => (
  	    	))}
  	       </div>
  	    	)}

  	  </div>
  }










}
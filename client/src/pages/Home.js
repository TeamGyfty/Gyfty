import React, { Component } from "react";
import RequestForm from "../components/RequestForm";
import Response from "../components/Response";
import PostForm from "../components/PostForm";
import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

import API from "../utils/API";

class Home extends Component {
  state = {
    newGifts: [],
    title: "",
    description: "",
    imageURL: "",
    user: ""
  };
// Handles updating state when the user types into the input field
    handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.addResponse();
  };

   addResponse = () => {
    if (this.state.name) {
      API.addRespose({
        name: this.state.name,
        description: this.state.description,
        imageURL: this.state.imageURL,
        user: this.state.user
      })
        .then(res =>  this.setState({newGift: res.data, title: "", description: "", imageURL: "" , user: ""}),
        // this.props.postGift(newGift)
        )
        .catch(err => console.log(err));
    }
  };
  getGifts = () => {
    API.getGifts({
      person: this.state.person,
      age: this.state.age,
      price: this.state.price,
      occation: this.state.occation
    })
      .then(res =>
        this.setState({
          gifts: res.data,
          message: !res.data.length
            ? "No New Gift was found"
            : ""
        })
      )
      .catch(err => console.log(err));
  };

  // handleGiftSave = id => {
  //   const gift = this.state.gifts.find(gift => gift._id === id);
  //   API.saveGift(gift).then(res => this.getGifts());
  // };

  render() {
    return (
      <Body>
        <Jumbotron>
          <h1 className="text-center">
            <strong>Find a Gift</strong>
          </h1>
          <h2 className="text-center">
            Posted Gifts
          </h2>
        </Jumbotron>

        <ImageCard title="response" icon="box">
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            title={this.state.title}
            description={this.state.description}
            imageURL={this.state.imageURL}
            user={this.state.user}
          />
        </ImageCard>
          
        <ImageCard title="Results">
          {this.state.newGift.length ? (
            <List>
              {this.state.newGifts.map(newGift => (
                  <NewGift
                    key={newGift._id}
                    _id={newGift._id}
                    title={newGift.title}
                    imageURL={newGift.imageURL}
                    user={newGift.user}
                    handleClick={this.handleArticleSave}
                    buttonText="Save Article"
                  />
              ))}
            </List>
          ) : (
                <h2 className="text-center">No Matching Gifts</h2>
          )}
        </ImageCard>   
        <Footer />
      </Body>
    );
  }
}

export default Home;
import React from 'react';
import PropTypes from 'prop-types';

class RequestForm extends Component {
    constructor(props) {
        super(props);
        
    state = {
      request: {},
      person: "",
      age: 0,
      price: 0,
      occasion: ""
    };
  }

  // Handles updating state when the user types into the input field
  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // When the form is submitted, use the API.saveRequest method to save the request to database
  
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name) {
      API.addRequest({
        person: this.state.person,
        age: this.state.age,
        price: this.state.price,
        occasion: this.state.occasion
      })
        .then(res =>  this.setState({request: res.data, person: "", age: "", price: "" , occasion: ""}),
        this.props.postRequest(request)
        )
        .catch(err => console.log(err));
    }
  };
 changeState = (request) => {
    return(
      this.setState({
          name: request
      })
    )
  };

// const Post = props => (
  render(){  
    <div className="col-6 col-sm-4 col-md-3">
      <div className="container">
          <form>
              <div className="form-group">
                  <label for="person">Recipient</label>
                  <input type="text" className="form-control" id="person" placeholder="recipient"></input>
              </div>
              <div className="form-group">
                  <label for="postDescription">Age</label>
                  <input type="number" className="form-control" id="age" placeholder="Age"></input>
              </div>
              <div className="form-group">
                  <label for="price">Maximum Price</label>
                  <input type="number" className="form-control" id="price" placeholder="Max Price"></input>
              </div>
              <div className="form-group">
                  <label for="occasion">Occation</label>
                  <input type="text" className="form-control" id="occasion" placeholder="Occasion"></input>
              </div>
          </form>
      </div>
    </div>
  };
 
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    recipient: PropTypes.string.isRequired,
    maxprice: PropTypes.number.isRequired,
    occasion: PropTypes.string.isRequired,
};

export default RequestForm;
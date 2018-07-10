import React from 'react';
import PropTypes from 'prop-types';

// const Post = props => (
    class PostForm extends Component {
        constructor(props) {
            super(props);
            
        state = {
          newGifts: [],
          title: "",
          description: "",
          imageURL: "",
          user: ""
        };
      }
render(){
    <div className="col-6 col-sm-4 col-md-3">
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="postTitle">Title</label>
                    <input type="text" className="form-control" id="postTitle" placeholder="Gift Title"></input>
                </div>
                <div className="form-group">
                    <label for="postDescription">Description</label>
                    <input type="text" className="form-control" id="postDescription" placeholder="Description of Gift"></input>
                </div>
                <div className="form-group">
                    <label for="imageURL">Gift Image URL</label>
                    <input type="text" className="form-control" id="imageURL" placeholder="Image URL"></input>
                </div>
                <div className="form-group">
                    <label for="userSubmit">Submitted By</label>
                    <input type="text" className="form-control" id="userSubmit" placeholder="Your Name"></input>
                </div>
                <div className="new-gift">
                    <button onClick={props.handleFormSubmit} 
                    type="submit" 
                    className="btn btn-lg btn-danger">
                    Submit
                    </button>
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

export default Post;
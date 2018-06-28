import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div className="col-6 col-sm-4 col-md-3">
    <div className="container">
        <div className="container">
        <h4>Post #: {props.id} </h4>
        <h2>Name: {props.name} </h2>
        <hr></hr>
            <p>For {props.recipient} </p>
            <p>Max Price {props.maxprice} </p>
            <p>Occasion {props.occasion} </p>
        </div>
        <div className="container">
            <div className="row">
            {
                props.data.map(color => (<Comment
                
                />))
                }
            </div>
        </div>
    </div>
  </div>
);

Post.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    recipient: PropTypes.string.isRequired,
    maxprice: PropTypes.number.isRequired,
    occasion: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        submitted: PropTypes.string.isRequired,
      })).isRequired,
};

export default Post;
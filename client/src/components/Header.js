import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand logo" href="/">GYFTY</a>
      <p>
        Hello!
      </p>
      <div className="d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <p className="nav-link">Welcome: {props.name}</p>
          </li>
          <li className="nav-item">
            <p className="nav-link"> | </p>
          </li>
          <li className="nav-item">
            <img 
                src="http://veipd.org/earlyintervention/wp-content/uploads/2015/12/gift.jpg"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
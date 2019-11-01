import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <nav
      className='navbar navbar-dark fixed-top'
      style={{ backgroundColor: '#343a40', opacity: '0.8', zIndex: '1' }}
    >
      <h1>
        <Link to='/'>TimeKeepers</Link>
      </h1>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;

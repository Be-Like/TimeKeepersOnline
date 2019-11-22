import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import '../../stylesheet/navbar.css';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li className='nav-item'>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li className='nav-item'>
        <Link to='/management'>Management</Link>
      </li>
      <li className='nav-item'>
        <Link to='/accounting'>Accounting</Link>
      </li>
      <li className='nav-item'>
        <Link to='/expenses'>Expenses</Link>
      </li>
      <li className='nav-item'>
        <Link to='/calendar'>Calendar</Link>
      </li>
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          href='/#'
          id='navbarDropdown'
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Dropdown
        </a>
        <div
          className='dropdown-menu dropdown-menu-right'
          aria-labelledby='navbarDropdown'
        >
          <Link className='dropdown-item dropdown-item-text' to='/dashboard'>
            Profile
          </Link>
          <Link className='dropdown-item' onClick={logout} to='/'>
            Logout
          </Link>
        </div>
      </li>
    </ul>
  );

  return (
    <nav
      className='navbar navbar-dark fixed-top'
      style={{
        backgroundColor: '#343a40',
        opacity: '0.8',
        zIndex: '1',
        boxShadow: '7px 9px 10px rgba(0,0,0,0.2)'
      }}
    >
      <h1>
        <Link to='/'>TimeKeepers</Link>
      </h1>

      {!loading && isAuthenticated && <Fragment>{authLinks}</Fragment>}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

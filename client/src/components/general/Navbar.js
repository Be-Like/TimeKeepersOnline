import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li className='nav-item'>
        <Link onClick={logout} to='/'>
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav
      className='navbar navbar-dark fixed-top'
      style={{ backgroundColor: '#343a40', opacity: '0.8', zIndex: '1' }}
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

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Landing = props => {
  return (
    <div>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large timekeepers'>TimeKeepers</h1>
            <p className='lead'>It's not all about time</p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>

              <Link to='/login' className='btn'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;

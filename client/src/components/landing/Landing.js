import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Landing = props => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>TimeKeepers</h1>
          <p className='large'>It's not all about time</p>
          <div>
            <Link to='/register' className='btn btn-primary mx-2'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-outline-light mx-2'>
              Login
            </Link>
          </div>
        </div>
        <div className='landing-footer'>
          <footer className='footer'>
            <a
              target='_blank'
              style={{ color: 'black' }}
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/jake-simpson-2b464b118'
            >
              @Jake Simpson
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {};

export default Landing;

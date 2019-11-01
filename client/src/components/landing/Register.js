import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Register = props => {
  return (
    <Fragment>
      <h1 className='large'>Sign Up</h1>
      <p className='normal'>Create your TimeKeepers account</p>
      <form className='form'>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Name'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            placeholder='Email Address'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            placeholder='Password'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            placeholder='Confirm Password'
            required
          />
        </div>
        <input type='submit' className='btn btn-outline-primary' />
      </form>
      <p className='my-2'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {};

export default Register;

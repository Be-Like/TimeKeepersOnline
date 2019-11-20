import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { removeAllAlerts } from '../../actions/alerts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ removeAllAlerts, login, alerts, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = submitForm => {
    submitForm.preventDefault();
    if (alerts) {
      removeAllAlerts();
    }

    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container'>
        <h1 className='large'>Sign In</h1>
        <p className='normal'>Sign into your TimeKeepers account</p>

        <form className='form' onSubmit={submitForm => onSubmit(submitForm)}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type='submit' className='btn btn-outline-primary' />
        </form>
        <p className='my-2'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  removeAllAlerts: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  alerts: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  alerts: state.alerts,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { removeAllAlerts, login })(Login);

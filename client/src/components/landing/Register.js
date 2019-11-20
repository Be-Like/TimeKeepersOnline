import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setAlert, removeAllAlerts } from '../../actions/alerts';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';

const Register = ({
  setAlert,
  removeAllAlerts,
  register,
  alerts,
  isAuthenticated
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passConfirm: ''
  });

  const { name, email, password, passConfirm } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = submitForm => {
    submitForm.preventDefault();
    if (alerts) {
      removeAllAlerts();
    }
    if (password !== passConfirm) {
      const misMatch = 'Passwords do no match';
      setAlert(misMatch, 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container'>
        <h1 className='large'>Sign Up</h1>
        <p className='normal'>Create your TimeKeepers account</p>
        <form className='form' onSubmit={submitForm => onSubmit(submitForm)}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
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
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Confirm Password'
              name='passConfirm'
              value={passConfirm}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type='submit' className='btn btn-outline-primary' />
        </form>
        <p className='my-2'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  removeAllAlerts: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  alerts: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  alerts: state.alerts,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  setAlert,
  removeAllAlerts,
  register
})(Register);

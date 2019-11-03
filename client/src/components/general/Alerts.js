import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alerts';

const Alerts = ({ alerts, removeAlert }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div
      key={alert.id}
      className={`alert alert-${alert.alertType} alert-dismissable`}
    >
      {alert.msg}
      <button type='button' className='close' aria-label='Close'>
        <span onClick={() => removeAlert(alert.id)}>&times;</span>
      </button>
    </div>
  ));

Alerts.propTypes = {
  removeAlert: PropTypes.func.isRequired,
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alerts
});

export default connect(
  mapStateToProps,
  { removeAlert }
)(Alerts);

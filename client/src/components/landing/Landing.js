import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Ant components
import { Button } from 'antd';
import 'antd/dist/antd.css';

const Landing = props => {
  return (
    <div>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>TimeKeepers</h1>
            <p className='lead'>It's not all about time</p>
            <div className='buttons'>
              <Button type='primary' size='large' className='tstbtn'>
                <Link to='/register'>Sign Up</Link>
              </Button>
              <Button type='default' className='tstbtn' size='large'>
                <Link to='/login'>Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;

import React from 'react';
import PropTypes from 'prop-types';
import classes from './Spinner.module.scss';

const spinner = props => {
  return <div className={classes.Loader}>Loading...</div>;
};

spinner.propTypes = {};

export default spinner;

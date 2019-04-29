import React from 'react';
import classes from './Spinner.module.scss';

const spinner = props => {
    return <div className={classes.Loader}>Loading...</div>;
};

spinner.propTypes = {};

export default spinner;

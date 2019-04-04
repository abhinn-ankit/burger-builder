import React, { Fragment } from 'react';
import classes from './Backdrop.module.scss';

const backdrop = props => {
  return <Fragment>{props.show ? <div className={classes.Backdrop} onClick={props.clicked} /> : null}</Fragment>;
};

export default backdrop;

import React, { Fragment } from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <main className={classes.content}>{props.children}</main>
    </Fragment>
  );
};

export default layout;

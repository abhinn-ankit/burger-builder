import React, { Fragment } from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={classes.content}>{props.children}</main>
    </Fragment>
  );
};

export default layout;

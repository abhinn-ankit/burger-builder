import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';

const sideDrawer = props => {
  return (
    <div className={classes.sideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

sideDrawer.propTypes = {};

export default sideDrawer;

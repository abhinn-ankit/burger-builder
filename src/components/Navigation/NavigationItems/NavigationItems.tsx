import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {
  return (
    <ul className={classes.navigationItems}>
      <NavigationItem link="/" active={true}>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

navigationItems.propTypes = {};

export default navigationItems;

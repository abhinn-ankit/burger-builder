import React from 'react';
import classes from './Toolbar.module.scss';
import PropTypes from 'prop-types';
import Logo from '../../Logo/Logo';

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>ul...</nav>
    </header>
  );
};

toolbar.propTypes = {};

export default toolbar;

import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.scss';

const navigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

navigationItem.propTypes = {
  children: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
};

export default navigationItem;

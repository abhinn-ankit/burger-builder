import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

const navigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
};

navigationItem.propTypes = {
  children: PropTypes.string,
  link: PropTypes.string,
  exact: PropTypes.bool,
};

export default navigationItem;

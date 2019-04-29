import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {
    const attachedClasses = [classes.sideDrawer];
    if (props.open) {
        attachedClasses.push(classes.open);
    } else {
        attachedClasses.push(classes.close);
    }
    return (
        <Fragment>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
};

sideDrawer.propTypes = {
    closed: PropTypes.func,
    open: PropTypes.bool,
};

export default sideDrawer;

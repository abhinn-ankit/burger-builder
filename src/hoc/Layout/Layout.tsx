import React, { Component, Fragment } from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState: any) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
        <main className={classes.content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;

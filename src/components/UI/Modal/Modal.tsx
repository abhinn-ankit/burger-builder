import React, { Component, Fragment } from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component<IProps, any> {
  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    return nextProps.show !== this.props.show || this.props.children !== nextProps.children;
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-180vh)',
            opacity: this.props.show ? 1 : 0,
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

interface IProps {
  show: boolean;
  modalClosed(): void;
}

export default Modal;

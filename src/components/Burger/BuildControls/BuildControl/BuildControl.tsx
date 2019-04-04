import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.module.scss';

const buildControl = (props: IProps) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

buildControl.propTypes = {
  label: PropTypes.string,
  added: PropTypes.func,
  removed: PropTypes.func,
  disabled: PropTypes.bool,
};

interface IProps {
  label: string;
  added: () => {};
  removed: () => {};
  disabled: boolean;
}

export default buildControl;

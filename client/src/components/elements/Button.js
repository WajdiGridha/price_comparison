import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
}

const defaultProps = {
  tag: 'button',
  color: '',
  size: '',
  margin:'',
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false
}

const Button = ({
  className,
  tag,
  color,
  size,
  margin,
  loading,
  wide,
  wideMobile,
  disabled,
  ...props
}) => {

  const classes = classNames(
    'button',
    color && `button-${color}`,
    size && `button-${size}`,
    margin && `button-${margin}`,
    loading && 'is-loading',
    wide && 'button-block',
    wideMobile && 'button-wide-mobile',
    className
  );

  const Component = tag;
  return (
    <Component
      {...props}
      className={classes}
      disabled={disabled}
    />
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;